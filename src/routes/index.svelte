<script context="module">
  import { supabase } from '$services/SupabaseService.ts';

  export async function load({ fetch, url }) {
    const user = await supabase.auth.user();

    if (!user) {
      return {
        status: 302,
        redirect: '/auth'
      };
    } else {
      const { data, error } = await supabase.from('notes').select('*');
      if (!error) {
        return {
          props: {
            notes: data,
            user
          }
        };
      }

      return {
        props: {
          error: error
        }
      };
    }
  }
</script>

<script>
  export let notes;
  export let error;
  export let user;
</script>

<h1>Testing</h1>

<style lang="scss">
  h1 {
    color: $tomato;
  }
</style>
