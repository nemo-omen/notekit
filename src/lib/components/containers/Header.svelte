<script>
  import { session } from '$app/stores';
</script>

<header>
  <nav>
    {#if !$session}
      <a href="/">Home</a>
      <a href="/signin">Sign Up/Log In</a>
    {:else}
      <a href="/">Home</a>
      <a href="/notebook">Notebook</a>
      <a href="/profile">Profile</a>
    {/if}
  </nav>
</header>

<style>
  nav {
    display: flex;
    gap: 2rem;
  }
</style>
