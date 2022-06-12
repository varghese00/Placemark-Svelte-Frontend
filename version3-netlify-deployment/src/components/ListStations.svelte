<script>
// @ts-nocheck

import { createEventDispatcher, getContext, onMount } from "svelte";

import Station from "./Station.svelte"; 

export let userStations=[];


const ChargingStationService=getContext("ChargingStationService");

onMount(async() => {userStations=await ChargingStationService.getUserStations();})


const dispatch= createEventDispatcher();

export async function updateStations() {
        stations = await ChargingStationService.getUserStations();
        if (stations)
        {
          // alert(stations)
          dispatch("message", stations)
          return stations;
        }
        else
        {
          alert("Something is going wrong")
        }
    }




</script>
<section>
  {#each userStations as station}
  <Station name={station.name} stationid={station._id} on:update={updateStations}/>
{/each}
</section>

