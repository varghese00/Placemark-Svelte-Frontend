<script>
  import {ChargingStationService} from "./services/ChargingStationService";
  import {setContext} from "svelte";
  import Main from "./pages/Main-view.svelte";
  import Login from "./pages/Login-view.svelte";
  import Signup from "./pages/Signup-view.svelte";
  import Dashboard from "./pages/Dashboard-view.svelte";
  import AboutView from "./components/About-view.svelte";
  import UserAccountView from "./pages/User-account-view.svelte";
  import StationView from "./pages/Station-view.svelte";
  import AdminAccessView from "./pages/Admin-access-view.svelte";
  import UpdateLocationView from "./pages/Update-location-view.svelte";
  import Map from "./pages/Map.svelte"
  import Charts from "./pages/Charts.svelte";




 

  import Router from "svelte-spa-router";


  setContext("ChargingStationService", new ChargingStationService("https://habitual-maroon-cushion.glitch.me"))
  // setContext("ChargingStationService", new ChargingStationService("http://localhost:4000"));


  let routes = {
    "/": Main,
    "/login": Login,
    "/signup": Signup,
    "/main": Main,
    "/logout": Main,
    "/dashboard": Dashboard,
    "/about":AboutView,
    "/user-account":UserAccountView,
    "/station/:id":StationView,
    "/admin-access":AdminAccessView,
    "/station/:id/location/:id":UpdateLocationView,
    "/map":Map,
    "/Charts":Charts
  }
</script>

<div class="container">
  <Router {routes}/>
</div>