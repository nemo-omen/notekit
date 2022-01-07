<script context="module">
  export async function load({ url, session }) {
    if (session === null) {
      return {
        status: 302,
        redirect: '/signin'
      };
    }

    return {
      props: {
        email: session
      }
    };
  }
</script>

<script>
  export let email;
</script>

<div class="center-container">
  <div class="profile-info">
    <p>Logged in as:</p>
    <h2>{email}</h2>
  </div>
  <form action="/logout" method="get">
    <!-- <input type="submit" value="Log Out" /> -->
    <button>Log Out</button>
  </form>
</div>
