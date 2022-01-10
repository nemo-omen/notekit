import { supabase, auth } from '$services/SupabaseService.ts';

export async function post(request) {
    let email = request.body.get('email');
    let password = request.body.get('password');

    const { session, error } = await supabase.auth.signUp({ email, password });

    if (error) {
        return {
            status: error.status,
            body: error.message,
        };
    }

    return {
        status: 200,
        body: JSON.stringify({ ok: true, email: session.user.email }),
        headers: {
            'set-cookie': `session=${session.user.email}; Path=/; HttpOnly; Secure; SameSite=Strict; Expires=${new Date(
        session.expires_at * 1000,
      ).toUTCString()};`,
        },
    };
}