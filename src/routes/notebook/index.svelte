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
  import { goto } from '$app/navigation';
  import { session } from '$app/stores';
  import Editor from '$components/UI/Editor.svelte';
  import Sidebar from '$components/UI/Sidebar.svelte';
  export let email;
  if (!email && !$session) {
    goto('/signin');
  }
</script>

<div class="workspace page-content">
  <Sidebar />
  <Editor />
</div>

<style>
  .workspace {
    position: relative;
    display: flex;
    height: 100%;
    width: 100%;
    background: tomato;
  }
</style>
