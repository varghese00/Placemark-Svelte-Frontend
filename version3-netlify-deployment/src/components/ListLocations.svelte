<script>
    import {getContext, onMount,createEventDispatcher} from "svelte";
import LocationImage from "./Location-image.svelte";
    import Location from "./Location.svelte";
    


    const ChargingStationService = getContext("ChargingStationService");
    const dispatch = createEventDispatcher();

    export let stationLocations=[] ;
    export let stationid;


    onMount(async() => {stationLocations=await ChargingStationService.getLocationsByStationId(stationid);})



export async function updateLocations() {
        stationLocations = await ChargingStationService.getLocationsByStationId(stationid);
        if (stationLocations)
        {
          // alert(stations)
          dispatch("message", stationLocations)
          return stationLocations;
        }
        else
        {
          alert("Something is going wrong")
        }
    }


</script>

  
{#each stationLocations as location }
  <Location locationid={location._id} name={location.name} latitude={location.latitude} longitude={location.longitude} 
  category={location.category} description={location.description} stationid={stationid} on:update={updateLocations}/>
{/each}
