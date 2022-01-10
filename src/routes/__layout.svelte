<script>
  import Header from '$components/containers/Header.svelte';
  import '../app.scss';
  import { page } from '$app/stores';
  console.log('$page: ', $page);
</script>

<Header />

<!-- {#if $page.url.pathname === '/'}
  <div class="background-svg">
    <svg width="1092" height="1092" viewBox="0 0 1092 1092" fill="none" class="yellow-circle bg-circle">
      <circle cx="568.539" cy="568.173" r="523.178" class="svg-shadow" />
      <circle cx="523.631" cy="523.622" r="523.178" fill="#FFC41D" />
    </svg>

    <svg width="583" height="583" viewBox="0 0 583 583" fill="none" class="gray-circle-01 bg-circle">
      <circle cx="291.986" cy="291.608" r="291" fill="#ACB6B9" />
    </svg>

    <svg width="925" height="905" viewBox="0 0 925 905" fill="none" class="blue-circle bg-circle">
      <circle cx="487.32" cy="467.453" r="437" transform="rotate(-120 487.32 467.453)" class="svg-shadow" />
      <circle cx="437.953" cy="437.453" r="437" transform="rotate(-120 437.953 437.453)" fill="#00B3C6" />
    </svg>

    <svg width="877" height="825" viewBox="0 0 877 825" fill="none" class="gray-circle-02 bg-circle">
      <ellipse
        rx="418.455"
        ry="431.457"
        transform="matrix(-0.52313 -0.852253 0.878783 -0.477221 438.526 412.505)"
        fill="#C8CED0"
      />
    </svg>

    <svg width="617" height="623" viewBox="0 0 617 623" fill="none" class="gray-circle-03 bg-circle">
      <circle cx="325.043" cy="331.406" r="291" class="svg-shadow" />
      <circle cx="291.806" cy="291.406" r="291" fill="#728288" />
    </svg>
  </div>
{/if} -->

<main>
  <slot />
</main>

<style>
  .bg-circle {
    position: absolute;
  }
  .background-svg {
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
  }

  .yellow-circle {
    top: 30vh;
    right: 5vw;
    z-index: -1;
  }
  .blue-circle {
    top: 110vh;
    right: 30vw;
    z-index: -2;
  }

  .gray-circle-01 {
    right: 40vw;
    top: 70vh;
    z-index: -3;
  }

  .gray-circle-02 {
    right: -5vw;
    top: 95vh;
    z-index: -4;
  }

  .gray-circle-03 {
    z-index: 0;
    top: 170vh;
    right: 30vw;
    z-index: -4;
  }

  svg .svg-shadow {
    mix-blend-mode: color-burn;
  }
</style>
