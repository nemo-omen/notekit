<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { browser } from '$app/env';
  import { session } from '$app/stores';
  import { createForm } from 'felte';
  import reporter from '@felte/reporter-dom';

  const dispatch = createEventDispatcher();

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
      }
    }
    const data = await response.json();
    $session = data.email;
    dispatchLogin();
  }

  function dispatchLogin() {
    dispatch('login');
  }
</script>

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
