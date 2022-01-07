<script context="module">
  import { supabase } from '$services/SupabaseService.ts';

  export async function load({ fetch, url, session }) {
    if (session !== null) {
      const { data, error } = await supabase.from('notes').select('*');

      if (!error) {
        return {
          props: {
            notes: data,
            user: session.user
          }
        };
      }

      return {
        props: {
          error: error
        }
      };
    }

    return {};
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
