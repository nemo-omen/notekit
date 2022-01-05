import { toExpressRequest, toExpressResponse, toSvelteKitResponse } from '$lib/utils/expressify.ts';

export const handle = async({request, resolve}) {
  const expressStyleRequest = toExpressRequest(request);

  const { user } = await auth.api.getUserByCookie(expressStyleRequest);

  request.locals.token = expressStyleRequest.cookies['sb::token'] || undefined;
  request.locals.user = user || { guest: true };

  if(request.locals.token) {
    supabase.auth.setAuth(request.locals.token);
  }

  let response = await resolve(request);

  if(request.method == 'POST' && request.path === '/api/auth.json') {
    auth.api.setAuthCookie(request, toExpressResponse(response));
    response = toSvelteKitResponse(response);
  }
  return response;
}