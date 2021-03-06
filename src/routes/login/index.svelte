<script context="module">
  export async function load({ url, session, params }) {
    if (session) {
      return {
        status: 302,
        redirect: '/notebook',
      };
    }
    return {};
  }
</script>

<script lang="ts">
  import { goto } from '$app/navigation';
  import { browser } from '$app/env';
  import { session } from '$app/stores';
  import { createForm } from 'felte';
  import reporter from '@felte/reporter-dom';
  import LinkButton from '$components/UI/LinkButton.svelte';

  let signinForm: HTMLFormElement;

  const { form, errors, touched, isValid, isSubmitting } = createForm({
    validate: (values) => {
      const errs = {};

      if (!values.email || !/^[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/.test(values.email)) {
        errs.email = 'Must be a valid email.';
      }

      if (!values.password) errs.password = ['Must not be empty'];

      if (values.password && values.password.length < 8) {
        errs.password = ['Must be at least 8 characters'];
      }

      if (values.password && values.password.length > 24) {
        errs.password = ['Must be 24 characters or fewer'];
      }

      return errs;
    },
    onSubmit: (values) => {
      login();
    },
    extend: [reporter({ single: true })],
  });

  async function login() {
    const response = await fetch('/login', {
      method: 'post',
      body: new FormData(signinForm),
    });

    if (browser) {
      if (!response.ok) {
        console.error(response);
      } else {
        const data = await response.json();
        $session = data.email;
        goto('./notebook');
      }
    }
  }
</script>

<div class="center-container auth-form">
  <h2 class="form-title">Log In</h2>
  <form use:form bind:this={signinForm}>
    <div class="input-group">
      <label for="email">Email Address</label>
      <input type="email" name="email" id="email" placeholder="you@example.com" />
      <div id="email-validation" data-felte-reporter-dom-for="email" />
    </div>
    <div class="input-group">
      <label for="password">Password</label>
      <input type="password" name="password" id="password" />
      <div id="password-validation" data-felte-reporter-dom-for="password" />
    </div>
    <input type="submit" value="Login" />
  </form>
  <p style="text-align: center">or</p>
  <LinkButton href="/signup">Sign Up</LinkButton>
</div>
