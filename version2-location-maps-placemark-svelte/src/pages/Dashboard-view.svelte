
<script>
  import Menu from "../components/Menu.svelte";
  import AddStation from "../components/AddStation.svelte"
  import ListStations from "../components/ListStations.svelte";
  import LocationMap from "../components/LocationMap.svelte";

//   // import { user } from "../stores";
//   import { getContext, onMount } from "svelte";
// import { push } from "svelte-spa-router";
//   // import { get } from "svelte/store";

//   const chargingStationService=getContext("ChargingStationService")
// let stations=[];
// let initialStation=undefined;

// export async function stationAdded(e) {
// await initialStation.refreshStationList();
// }

// onMount(async()=>{refreshStationList})

// async function refreshStationList(){
//     let stations=await chargingStationService.getUserStations();
//     alert(stations)
//     push("/dashboard")
//     return stations;
//   }

</script>

<Menu/>

<!-- <section class="section">
  <ListStations/>
  <AddStation />
</section> -->

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