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
  // import NotebookPens from '$components/NotebookPens.svelte';
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
    <LinkButton href="/signup">Sign Up (it's free)</LinkButton>
  </div>
  <div class="hero-image">
    <NotebookPensCB />
  </div>
</div>

<style lang="scss">
  .hero {
    display: flex;
    flex-direction: column;
    gap: 4rem;
    margin: 4rem 2rem;
    font-family: var(--serif);
  }

  .hero-image {
    display: flex;
    align-items: center;
    flex-basis: 1;
    margin: 0 25vw;
    order: 1;
  }

  .message {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
    flex-basis: 1;
    text-align: center;
    order: 2;
  }

  .bold-text {
    font-weight: 600;
  }

  .heading-message {
    font-size: var(--step-0);
    letter-spacing: 0.125em;
    font-weight: 500;
  }

  @media (min-width: 1024px) {
    .hero {
      display: grid;
      grid-template-columns: 5fr 6fr;
      gap: 8rem;
    }

    .message {
      align-items: flex-start;
      text-align: left;
      order: 1;
    }

    .hero-image {
      margin: 0;
      order: 2;
    }
  }

  @media (max-width: 550px) {
    .hero-image {
      margin: 0 15vw;
    }
  }
</style>
