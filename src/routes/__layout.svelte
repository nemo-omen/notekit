<script context="module">
  export async function load({ url, session }) {
    return {
      props: {
        email: session
      }
    };
  }
</script>

<script>
  import Header from '$components/containers/Header.svelte';
  import { session } from '$app/stores';
  import { browser } from '$app/env';
  import '../app.scss';
  export let email;

  if (browser) {
    if (email) $session = email;
  }
</script>

<Header />

<main>
  <slot />
</main>
