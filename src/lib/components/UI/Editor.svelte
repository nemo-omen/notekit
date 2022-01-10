<script>
  import { onMount, onDestroy } from 'svelte';
  import { Editor } from '@tiptap/core';
  import StarterKit from '@tiptap/starter-kit';

  let editorElement;
  let editor;

  onMount(() => {
    editor = new Editor({
      element: editorElement,
      extensions: [StarterKit],
    });
  });

  onDestroy(() => {
    if (editor) {
      editor.destroy();
    }
  });
</script>

<div class="editor" bind:this={editorElement} />

<style>
  .editor {
    width: 80%;
    height: 100%;
    background-color: var(--dark);
  }
  :global(.ProseMirror) {
    background-color: var(--dark);
    /* height: 100%; */
    caret-color: var(--red);
    padding: var(--step--1);
    color: var(--light);
    font-weight: 500;
  }

  :global(.ProseMirror p) {
    line-height: 1.75;
  }

  :global(.ProseMirror > * + *) {
    margin-top: var(--step-0);
  }
</style>
