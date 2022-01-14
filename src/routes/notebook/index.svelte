<script context="module">
  export async function load({ url, session }) {
    if (session === null) {
      return {
        status: 302,
        redirect: '/login',
      };
    }

    return {
      props: {
        email: session,
      },
    };
  }
</script>

<script lang="ts">
  import 'flex-splitter-directive/styles.min.css';
  import { goto } from '$app/navigation';
  import { session } from '$app/stores';
  import { browser } from '$app/env';
  import Editor from '$components/UI/Editor.svelte';
  import Sidebar from '$components/UI/Sidebar.svelte';
  export let email;
  let splitReady = false;

  if (browser) {
    (async () => {
      await import('flex-splitter-directive');
      splitReady = true;
    })();
  }

  if (!email && !$session) {
    goto('/login');
  }
</script>

{#if splitReady}
  <div class="workspace page-content" data-flex-splitter-horizontal>
    <Sidebar />
    <div role="separator" class="separator" />
    <Editor />
  </div>
{/if}

<style>
  .workspace {
    position: relative;
    display: flex;
    height: 100%;
    width: 100%;
  }

  .separator {
    background-color: var(--foreground);
    border-left: 1px solid var(--dark--2);
    width: 0.25rem !important;
  }

  .separator:hover,
  .separator:active {
    border-left-color: transparent;
    background-color: var(--accent-3);
  }
</style>
