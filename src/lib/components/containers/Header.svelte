<script>
  import { session } from '$app/stores';
  import Logo from '$components/UI/Logo.svelte';
  import GithubLogo from '$components/UI/GithubLogo.svelte';
  import LinkButton from '$components/UI/LinkButton.svelte';
</script>

<header>
  <a href="/" class="brand">
    <Logo />
    <span class="brand-text">NoteKit</span>
  </a>
  <nav>
    {#if !$session}
      <a href="/login">Login</a>
      <LinkButton href="/signup">
        <span style="font-size: 1rem"> Sign Up (it's free) </span>
      </LinkButton>
      <a href="https://github.com/nemo-omen/notekit" class="github-link">
        <GithubLogo />
      </a>
    {:else}
      <a href="/notebook">Notebook</a>
      <a href="/profile">Profile</a>
      <a href="/help">Help</a>
      <a href="https://github.com/nemo-omen/notekit" class="github-link">
        <GithubLogo />
      </a>
    {/if}
  </nav>
</header>

<style>
  header {
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    margin-block: 1rem;
    /* font-family: var(--sans); */
    font-weight: 600;
    font-size: var(--step-0);
    color: #333333;
  }
  nav {
    display: flex;
    align-items: center;
    gap: var(--step-2);
  }

  .brand {
    font-size: var(--step-1);
    display: flex;
    align-items: center;
    gap: var(--step-0);
    cursor: pointer;
  }

  .brand:hover {
    color: var(--darker);
  }

  .brand-text {
    font-size: 1.5rem;
  }

  .github-link {
    font-size: 2rem;
    display: flex;
    align-items: center;
    cursor: pointer;
    color: #333333;
  }

  .github-link:hover {
    color: #222222;
  }

  @media (min-width: 1280px) {
    header {
      width: 70%;
      align-items: center;
    }
  }
</style>
