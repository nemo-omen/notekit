<script context="module">
  export async function load({ url, session }) {
    console.log({ session });
    return {
      props: {
        session
      }
    };
  }
</script>

<script>
  import { supabase, auth } from '$services/SupabaseService.ts';
  import Header from '$components/containers/Header.svelte';
  import '../app.scss';
  export let session;

  // auth.onAuthStateChange(async (event, _session) => {
  //   if (event !== 'SIGNED-OUT') {
  //     session.set({ user: _session.user });
  //     await setAuthCookie(_session);
  //   } else {
  //     session.set({ user: { guest: true } });
  //     await unsetAuthCookie();
  //   }
  // });
</script>

<Header />

<main>
  <slot />
  {#if session}
    {JSON.stringify(session, null, 2)}
  {/if}
</main>
