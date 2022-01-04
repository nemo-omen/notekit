<script context="module">
  export async function load({ url, session }) {
    return {
      props: {
        session
      }
    };
  }
</script>

<script>
  import { page } from '$app/stores';
  import Header from '$components/containers/Header.svelte';
  import '../app.scss';
  export let session;
  console.log({ session });
</script>

<Header />

<main>
  <slot />
</main>
