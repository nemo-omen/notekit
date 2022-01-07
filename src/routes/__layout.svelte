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
  import '../app.scss';
  export let email;
</script>

<Header />

<main>
  <slot />
</main>
