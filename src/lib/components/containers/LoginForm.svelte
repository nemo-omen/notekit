<script>
  import { goto } from '$app/navigation';
  import { browser } from '$app/env';

  async function login() {
    const response = await fetch('/signin', {
      method: 'post',
      body: new FormData(e.target)
    });

    if (browser) {
      if (response.ok) goto('/notebook');
    }
  }
</script>

<h2>Log In</h2>
<form on:submit|preventDefault={login}>
  <div class="input-group">
    <label for="email">Email Address</label>
    <input type="email" name="email" id="email" placeholder="you@example.com" />
  </div>
  <div class="input-group">
    <label for="password">Password</label>
    <input type="password" name="password" id="password" />
  </div>
  <input type="submit" value="Login" />
</form>
