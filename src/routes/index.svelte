<script context="module">
  import { supabase } from '$services/SupabaseService.ts';

  export async function load({ fetch, url, session }) {
    if (session !== null) {
      const { data, error } = await supabase.from('notes').select('*');
      console.log({ data });

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

  console.log({ notes });
</script>

<h1>Your Notebooks</h1>

<style lang="scss">
  h1 {
    color: $tomato;
  }
</style>
