import { supabase } from '$services/SupabaseService.ts';

export async function get() {
    const { error } = await supabase.auth.signOut();

    if (error) {
        console.error({ error });
        return {
            status: error.status,
            body: error.message,
        };
    }

    return {
        status: 302,
        headers: {
            location: '/',
            'set-cookie': `session=; path=/; expires=0;`,
        },
    };
}