<script context="module">
  export async function load({ url, session }) {
    if (session) {
      return {
        status: 302,
        redirect: '/'
      };
    }
    return {};
  }
</script>

<script>
  import { session } from '$app/stores';
  import { goto } from '$app/navigation';
  import { browser } from '$app/env';
  import LoginForm from '$components/containers/LoginForm.svelte';
  import SignupForm from '$components/containers/SignupForm.svelte';

  // console.log({ $session });

  let isSignup = true;

  function toggleLogin() {
    isSignup = !isSignup;
  }

  function setLogin() {
    goto('/notebook');
  }
</script>

<div class="center-container">
  {#if isSignup}
    <SignupForm on:login={setLogin} />
    <button on:click={toggleLogin}>Log In Instead</button>
  {:else}
    <LoginForm on:login={setLogin} />
    <button on:click={toggleLogin}>Sign Up Instead</button>
  {/if}
</div>

<style>
</style>
