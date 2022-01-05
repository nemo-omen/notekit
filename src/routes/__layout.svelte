<script context="module">
  // export async function load({ url, session }) {
  //   return {
  //     props: {
  //       session,
  //     },
  //   };
  // }
</script>

<script>
  import { page, session } from '$app/stores';
  import { setAuthCookie, unsetAuthCookie } from '$lib/utils/session.ts';
  import { supabase } from '$services/SupabaseService.ts';
  import Header from '$components/containers/Header.svelte';
  import '../app.scss';
  // export let session;

  supabase.auth.onAuhStateChange(async (event, _session) => {
    if (event !== 'SIGNED-OUT') {
      session.set({ user: _session.user });
      await setAuthCookie(_session);
    } else {
      session.set({ user: { guest: true } });
      await unsetAuthCookie();
    }
  });
</script>

<Header />

<main>
  <slot />
</main>
