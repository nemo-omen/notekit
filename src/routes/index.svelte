<script context="module">
  import { supabase } from '../lib/services/SupabaseService.ts';

  export async function load({ fetch, url }) {
    const { data, error } = await supabase.from('notes').select('*');
    if (!error) {
      console.log(data);
      return {
        props: {
          notes: data
        }
      };
    }
    console.error(error);
    return {
      props: {
        error: error
      }
    };
  }
</script>

<script>
  export let notes;
  export let error;
</script>

<h1>Testing</h1>

<style lang="scss">
  h1 {
    color: $tomato;
  }
</style>
