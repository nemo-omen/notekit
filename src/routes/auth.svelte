<script context="module">
  export async function load({ url, session }) {
    console.log({ session });
    if (session.user) {
      return {
        status: 302,
        redirect: '/notebook'
      };
    }
  }
</script>

<script>
</script>

<h1>Login</h1>
