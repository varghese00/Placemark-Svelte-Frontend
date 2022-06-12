<script>
  import Main from "./pages/Main-view.svelte"
  import Login from "./pages/Login-view.svelte"
  import Signup from "./pages/Signup-view.svelte"

  import Router from "svelte-spa-router";

  let routes = {
    "/": Main,
    "/login": Login,
    "/signup": Signup,
    "/main": Main,
    "/logout": Main
  }
</script>

<div class="container">
  <Router {routes}/>
</div>