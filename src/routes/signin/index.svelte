<script context="module">
  export async function load({ url, session, params }) {
    if (session) {
      return {
        status: 302,
        redirect: '/notebook',
      };
    }
    return {};
  }
</script>

<script>
  import { goto } from '$app/navigation';
  import { browser } from '$app/env';
  import { onMount, afterUpdate } from 'svelte';
  import { page, navigating } from '$app/stores';
  import LoginForm from '$components/containers/LoginForm.svelte';
  import SignupForm from '$components/containers/SignupForm.svelte';

  let isSignup = true;

  function setLoggedin() {
    if (browser) {
      goto('/notebook');
    }
  }

  function toggleLogin() {
    if (browser) {
      if (isSignup === true) {
        goto('signin?login=true');
      } else if (isLogin === true) {
        goto('signin?signup=true');
      }
    }
  }

  function setLoginStateFromParams() {
    if (browser) {
      const url = $page.url;
      if (url.search) {
        if (url.search === '?login=true') {
          isSignup = false;
        } else {
          isSignup = true;
        }
      } else {
        goto(url);
      }
    }
  }

  onMount(() => {
    setLoginStateFromParams();
  });

  afterUpdate(() => {
    setLoginStateFromParams();
  });
</script>

<div class="center-container auth-form">
  {#if isSignup}
    <SignupForm on:login={setLoggedin} />
    <p class="center-block">or</p>
    <button on:click={toggleLogin}>Log In Instead</button>
  {:else}
    <LoginForm on:login={setLoggedin} />
    <p class="center-block">or</p>
    <button on:click={toggleLogin}>Sign Up Instead</button>
  {/if}
</div>

<style>
</style>
