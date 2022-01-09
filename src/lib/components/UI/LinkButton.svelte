<script>
  export let href = '';
  export let innerText = '';
</script>

<a {href} class="link-button">{innerText}</a>

<style>
  .link-button {
    background-color: #333333;
    padding: 0.5rem 1rem;
    text-decoration: none;
    color: #fff;
    font-family: var(--sans);
    font-size: inherit;
    display: block;
    cursor: pointer;
    border-radius: 0.5em;
    font-weight: 600;
    letter-spacing: 0.125em;
  }

  .link-button:hover {
    background-color: #222222;
  }
</style>
