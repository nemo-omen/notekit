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
  export let email;

  if (!email && !$session) {
    goto('/signin');
  }
</script>
