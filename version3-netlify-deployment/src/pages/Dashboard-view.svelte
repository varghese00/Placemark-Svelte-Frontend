
<script>
  import Menu from "../components/Menu.svelte";
  import AddStation from "../components/AddStation.svelte"
  import ListStations from "../components/ListStations.svelte";
  import LocationMap from "../components/LocationMap.svelte";


</script>

<Menu/>



<div class="columns is-vcentered">
  <div class="column has-text-centered">
    <LocationMap/>
  </div>
  <div class="column box has-text-centered">
    <h1 class="title is-4">Select Charging Station County</h1>
    <AddStation/>
    <ListStations/>
  </div>
</div>