<script context="module">
  export async function load({ url, session }) {
    console.log({ session });
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
  import LoginForm from '$components/containers/LoginForm.svelte';
  import SignupForm from '$components/containers/SignupForm.svelte';
  let isSignup = true;

  function toggleLogin() {
    isSignup = !isSignup;
  }
</script>

<div class="center-container">
  {#if isSignup}
    <SignupForm />
    <button on:click={toggleLogin}>Log In Instead</button>
  {:else}
    <LoginForm />
    <button on:click={toggleLogin}>Sign Up Instead</button>
  {/if}
</div>

<style>
  .center-container {
    width: 20rem;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
</style>
