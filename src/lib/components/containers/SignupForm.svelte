<script>
  import { goto } from '$app/navigation';
  import { browser } from '$app/env';

  let email = '';
  let confirmation = '';
  let isConfirmed = true;
  let isValid = false;

  async function signup() {
    if (confirm() === false) {
      const response = await fetch('/signup', {
        method: 'post',
        body: new FormData(e.target)
      });

      if (browser) {
        if (response.ok) goto('/notebook');
      }
    }
  }

  function confirm() {
    isConfirmed = !(email === confirmation);
    return isConfirmed;
  }

  function validateEmail() {
    isValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
    return isValid;
  }
</script>

<h2>Sign Up</h2>
<form on:submit|preventDefault={signup}>
  <div class="input-group">
    <label for="email">Email Address</label>
    <input
      type="email"
      name="email"
      id="email"
      placeholder="you@example.com"
      bind:value={email}
    />
  </div>
  <div class="input-group">
    <label for="password">Password</label>
    <input type="password" name="password" id="password" />
  </div>
  <div class="input-group">
    <label for="email">Password Confirmation</label>
    <input
      type="password"
      name="confirmation"
      id="confirmation"
      bind:value={confirmation}
      class={isConfirmed ? '' : 'unconfirmed'}
      on:blur={confirm}
    />
  </div>
  <input type="submit" value="Sign Up" disabled={!isConfirmed ? true : false} />
</form>

<style>
  .unconfirmed {
    border: 1px solid tomato;
    background: #ffd9d2;
  }
</style>
