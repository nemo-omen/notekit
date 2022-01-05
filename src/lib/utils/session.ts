type SupabaseAuthEvent = 'SIGNED-IN' | 'SIGNED-OUT';  

export async function setServerSession(event: SupabaseAuthEvent, session: any) {
  await fetch('/auth.json', {
    method: 'POST',
    headers: new Headers({'Content-Type', 'application/json'}),
    credentials: 'same-origin',
    body: JSON.stringify({event, session})
  });
}


export const setAuthCookie = async(session: any) => await setServerSession('SIGNED-IN', session);

export const unsetAuthCookie = async() => await setServerSession('SIGNED-OUT', null);