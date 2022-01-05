import * as cookie from 'cookie';

export function toExpressRequest(req) {
  return {
    ...req,
    cookies: cookie.parse(req.headers.cookie || ''),
  };
}

export function toExpressResponse(resp: any) {
  return {
    ...resp,
    getHeader: (header: any) => resp.headers[header.toLowerCase()],
    setHeader: (header: any, value: any) => (resp.headers[header.toLowerCase()] = value),
    status: (_: any) => ({ json: (_: any) => {} }),
  };
}

export function toSvelteKitResponse(resp) {
  const { getHeader, setHeader, ...returnableResp } = resp;
  return returnableResp;
}
