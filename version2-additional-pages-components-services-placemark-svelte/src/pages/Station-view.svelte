<script>
    import Menu from "../components/Menu.svelte";
    import ListLocations from "../components/ListLocations.svelte";
    import AddLocation from "../components/Add-location.svelte";


import LocationList from "../components/ListLocations.svelte"
import { getContext, onMount } from "svelte";
import Location from "../components/Location.svelte";

const  ChargingStationService=getContext("ChargingStationService");

export let params;
let stationLocations=[];

async function getLocations() {
        stationLocations = await ChargingStationService.getLocationsByStationId(params.id)
        console.log(params.id)
        // locationList = stationLocations.filter(stationLocation => stationLocation.locationid === params.id);
    }

    onMount(async () => {
        getLocations();
    });
</script>


<Menu/>

<section class="section">
<h1>All Locations are going to be here</h1>
  <!-- <div class="title">
    {{station.name}}
  </div>
  {{> list-locations}}
  {{> add-location}} -->


<ListLocations on:update={getLocations} stationid={params.id} />
<AddLocation stationid={params.id} on:update={getLocations} />
<!-- {@debug params} -->

</section>

