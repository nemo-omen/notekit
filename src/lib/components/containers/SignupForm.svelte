<script lang="ts">
  import { goto } from '$app/navigation';
  import { browser } from '$app/env';

  let form: HTMLFormElement;
  let email: string = '';
  let password: string = '';
  let confirmation: string = '';
  let isValidPasswordLength: boolean = true;
  let isValidEmail: boolean = true;
  let isConfirmed: boolean = true;
  let isValidFormState: boolean = false;

  async function signup() {
    const response = await fetch('/signup', {
      method: 'post',
      body: new FormData(form)
    });

    if (browser) {
      if (response.ok) goto('/notebook');
    }
  }

  function confirm(e) {
    isConfirmed = password === e.target.value;
    validateFormState();
    return isConfirmed;
  }

  function validatePasswordLength(e) {
    isValidPasswordLength = e.target.value.trim().length > 6;
    validateFormState();
    return isValidPasswordLength;
  }

  function validateEmail(e) {
    isValidEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
      e.target.value
    );
    validateFormState();
    return isValidEmail;
  }

  function validateFormState() {
    isValidFormState = isValidPasswordLength && isValidEmail && isConfirmed;
    return isValidFormState;
  }
</script>

<h2>Sign Up</h2>
<form on:submit|preventDefault={signup} bind:this={form}>
  <div class="input-group">
    <label for="email">Email Address</label>
    <input
      type="email"
      name="email"
      id="email"
      placeholder="you@example.com"
      bind:value={email}
      on:blur={validateEmail}
      class={isValidEmail ? '' : 'invalid'}
    />
  </div>
  <div class="input-group">
    <label for="password">Password</label>
    <input
      type="password"
      name="password"
      id="password"
      bind:value={password}
      on:blur={validatePasswordLength}
      class={isValidPasswordLength ? '' : 'invalid'}
    />
  </div>
  <div class="input-group">
    <label for="email">Password Confirmation</label>
    <input
      type="password"
      name="confirmation"
      id="confirmation"
      bind:value={confirmation}
      class={isConfirmed ? '' : 'invalid'}
      on:blur={confirm}
    />
  </div>
  <input type="submit" value="Sign Up" disabled={!isValidFormState} />
</form>

<style>
  .invalid {
    border: 1px solid tomato;
    background: #ffd9d2;
  }
</style>
