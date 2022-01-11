<script context="module">
  export async function load({ url, session }) {
    if (session === null) {
      return {
        status: 302,
        redirect: '/signin',
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

  let splitter;
  if (browser) {
    (async () => {
      splitter = await import('flex-splitter-directive');
    })();
  }

  if (!email && !$session) {
    goto('/signin');
  }
</script>

<div class="workspace page-content" data-flex-splitter-horizontal>
  <Sidebar />
  <div role="separator" class="separator" />
  <Editor />
</div>

<style>
  .workspace {
    position: relative;
    display: flex;
    height: 100%;
    width: 100%;
  }

  .separator {
    background-color: var(--dark--1);
  }

  .separator:hover,
  .separator:active {
    background-color: var(--dark--2);
  }
</style>
