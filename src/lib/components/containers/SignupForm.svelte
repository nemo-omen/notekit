<script lang="ts">
  import { goto } from '$app/navigation';
  import { browser } from '$app/env';
  import { createForm } from 'felte';

  let submitButton: HTMLButtonElement;

  let emailValue: string = '';
  let passwordValue: string = '';
  let passwordConfirmationValue: string = '';

  let emailInvalidMessage = "That's not an email! (example@whatever.com).";
  let passwordInvalidMessage = 'Password not the right length.';
  let passwordConfirmationInvalidMessage = "Confirmation doesn't match password.";

  let isValidFormState: boolean = false;

  const { form, errors, touched, isValid, isSubmitting } = createForm({
    validate: (values) => {
      const errs = {};
      if (!values.email || !/^[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/.test(values.email)) {
        errs.email = 'Must be a valid email.';
      }
      if (!values.password) errs.password = ['Must not be empty', 'Must be over 8 characters'];
      if (values.password && values.password.length < 8) {
        errs.password = ['Must be over 8 characters'];
      }

      if (!values.confirmation) errs.confirmation = ['Must not be empty.', 'Must match password.'];

      if (values.confirmation !== values.password) {
        errs.confirmation = 'Must match password.';
      }
      return errs;
    },
    onSubmit: (values) => {
      console.log(values);
      console.log($touched);
    },
  });

  async function signup() {
    const response = await fetch('/signup', {
      method: 'post',
      body: new FormData(),
    });

    if (browser) {
      if (response.ok) goto('/notebook');
    }
  }
</script>

<h2>Sign Up</h2>
<form use:form>
  <div class="input-group">
    <label for="email">Email Address</label>
    <input type="email" name="email" id="email" placeholder="you@example.com" class={$errors.email ? 'invalid' : ''} />
  </div>
  <div class="input-group">
    <label for="password">Password</label>
    <input type="password" name="password" id="password" class={$errors.password ? 'invalid' : ''} />
  </div>
  <div class="input-group">
    <label for="confirmation">Password Confirmation</label>
    <input type="password" name="confirmation" id="confirmation" class={$errors.confirmation ? 'invalid' : ''} />
  </div>
  <input
    type="submit"
    value="Sign Up"
    disabled={$errors.email || $errors.password || $errors.confirmation ? true : false}
  />
  {#if $errors}
    <pre>{JSON.stringify($errors)}</pre>
  {/if}
</form>

<style>
  .invalid {
    border: 1px solid tomato;
    background: rgb(255, 206, 197);
  }
</style>
