<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { browser } from '$app/env';
  import { session } from '$app/stores';
  import { createForm } from 'felte';
  import reporter from '@felte/reporter-dom';

  const dispatch = createEventDispatcher();
  let signupForm: HTMLFormElement;

  const { form, errors, touched, isValid, isSubmitting } = createForm({
    validate: (values) => {
      const errs = {};

      if (!values.email || !/^[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/.test(values.email)) {
        errs.email = 'Must be a valid email.';
      }

      if (!values.password) errs.password = ['Must not be empty', 'Must be at least 8 characters'];

      if (values.password && values.password.length < 8) {
        errs.password = ['Must be at least 8 characters'];
      }

      if (values.password && values.password.length > 24) {
        errs.password = ['Must be 24 characters or fewer'];
      }

      if (!values.confirmation) errs.confirmation = ['Must not be empty.', 'Must match password.'];

      if (values.confirmation !== values.password) {
        errs.confirmation = 'Must match password.';
      }

      return errs;
    },
    onSubmit: (values) => {
      signup();
    },
    extend: [reporter({ single: true })],
  });

  async function signup() {
    const response = await fetch('/signup', {
      method: 'post',
      body: new FormData(signupForm),
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

<h2 class="form-title">Sign Up</h2>
<form use:form bind:this={signupForm}>
  <div class="input-group">
    <label for="email">Email Address</label>
    <input
      type="email"
      name="email"
      id="email"
      aria-describedby="email-validation"
      placeholder="you@example.com"
      class={$errors.email ? 'invalid' : ''}
    />
    <div id="email-validation" data-felte-reporter-dom-for="email" class="validation-error" />
  </div>
  <div class="input-group">
    <label for="password">Password</label>
    <input
      type="password"
      name="password"
      id="password"
      aria-describedby="password-validation"
      class={$errors.password ? 'invalid' : ''}
    />
    <div id="password-validation" data-felte-reporter-dom-for="password" class="validation-error" />
  </div>
  <div class="input-group">
    <label for="confirmation">Password Confirmation</label>
    <input
      type="password"
      name="confirmation"
      id="confirmation"
      aria-describedby="confirmation-validation"
      class={$errors.confirmation ? 'invalid' : ''}
    />
    <div id="confirmation-validation" data-felte-reporter-dom-for="confirmation" class="validation-error" />
  </div>
  <input
    type="submit"
    value="Sign Up"
    disabled={$errors.email || $errors.password || $errors.confirmation ? true : false}
  />
</form>

<style>
</style>
