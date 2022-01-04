<script lang="ts">
  import { goto } from '$app/navigation';
  import { browser } from '$app/env';
  import { onMount } from 'svelte';

  let form: HTMLFormElement;
  let submitButton: HTMLButtonElement;
  let emailInput: HTMLInputElement;
  let email: string = '';
  let password: string = '';
  let passwordConfirmation: string = '';
  let isValidFormState: boolean = false;

  async function signup() {
    const response = await fetch('/signup', {
      method: 'post',
      body: new FormData(form),
    });

    if (browser) {
      if (response.ok) goto('/notebook');
    }
  }

  function confirm(event: Event): boolean {
    const target = event.target as HTMLInputElement;
    let isConfirmed: boolean = password === target.value;
    return isConfirmed;
  }

  function validatePasswordLength(event: Event): boolean {
    const target: HTMLInputElement = event.target as HTMLInputElement;
    let isValidPasswordLength: boolean = target.value.trim().length > 6;
    return isValidPasswordLength;
  }

  function validateEmail(event: Event): boolean {
    const target: HTMLInputElement = event.target as HTMLInputElement;
    let isValidEmail: boolean = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(target.value);
    return isValidEmail;
  }

  function validateForm(event: Event) {
    const target: HTMLFormElement = event.target as HTMLFormElement;
    if (target.checkValidity) {
    } else {
      event.preventDefault();
    }
  }

  onMount(() => {
    form.noValidate = true;
  });
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
      bind:this={emailInput}
      required
    />

    <input type="email" name="email" id="email" placeholder="you@example.com" bind:value={email} required />
  </div>
  <div class="input-group">
    <label for="password">Password</label>
    <input type="password" name="password" id="password" bind:value={password} required min="6" max="128" />
  </div>
  <div class="input-group">
    <label for="email">Password Confirmation</label>
    <input
      type="password"
      name="confirmation"
      id="confirmation"
      bind:value={passwordConfirmation}
      on:blur={confirm}
      required
      min="6"
      max="128"
    />
  </div>
  <input type="submit" value="Sign Up" disabled={!isValidFormState} bind:this={submitButton} />
</form>

<style>
  input:valid {
    border: inherit;
    background: inherit;
  }
  /* input:invalid {
    border: 1px solid tomato;
    background: #ffd9d2;
  } */
</style>
