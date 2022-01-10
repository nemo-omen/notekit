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
  import 'flex-splitter-directive';
  import 'flex-splitter-directive/styles.min.css';
  import { goto } from '$app/navigation';
  import { session } from '$app/stores';
  import Editor from '$components/UI/Editor.svelte';
  import Sidebar from '$components/UI/Sidebar.svelte';
  export let email;
  if (!email && !$session) {
    goto('/signin');
  }
</script>

<div class="workspace page-content" data-flex-splitter-horizontal>
  <Sidebar />
  <div role="separator" />
  <Editor />
</div>

<style>
  .workspace {
    position: relative;
    display: flex;
    height: 100%;
    width: 100%;
  }
</style>
