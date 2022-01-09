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
</script>

<div class="center-container auth-form" />

<style>
</style>
