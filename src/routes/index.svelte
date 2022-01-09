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
            user: session.user,
          },
        };
      }

      return {
        props: {
          error: error,
        },
      };
    }

    return {};
  }
</script>

<script>
  import NotebookPens from '$components/NotebookPens.svelte';
  import NotebookPensCB from '$components/NotebookPensCB.svelte';
  import LinkButton from '$components/UI/LinkButton.svelte';
  export let notes;
  export let error;
  export let user;

  console.log({ notes });
</script>

<div class="hero">
  <div class="message">
    <p class="heading-message">
      <span class="bold-text">NoteKit</span> makes notetaking simple.
    </p>
    <p class="heading-message">
      It syncs where you need it to, links easily between documents, and lets you edit with whoever you want.
    </p>
    <LinkButton href="/signin?signup=true">Sign Up (it's free)</LinkButton>
  </div>
  <div class="hero-image">
    <!-- <img src="NotebookPensCB.svg" alt="Notebook and Pens" /> -->
    <NotebookPensCB />
    <!-- <NotebookPens /> -->
  </div>
</div>

<style lang="scss">
  .hero {
    display: grid;
    grid-template-columns: 5fr 6fr;
    gap: 8rem;
    margin-block: 8rem;
    font-family: var(--serif);
  }
  .hero-image {
    display: flex;
    align-items: center;
    flex-basis: 1;
  }

  .message {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    align-items: flex-start;
    flex-basis: 1;
  }
  .bold-text {
    font-weight: 600;
  }

  .heading-message {
    font-size: var(--step-0);
    letter-spacing: 0.125em;
    font-weight: 500;
  }
</style>
