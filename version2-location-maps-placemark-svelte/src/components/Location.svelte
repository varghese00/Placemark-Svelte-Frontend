<script>
import { createEventDispatcher, getContext, onMount } from "svelte";
import {push} from "svelte-spa-router";
import Station from "./Station.svelte";
import userStations from "./ListStations.svelte"
import LocationImage from "./Location-image.svelte";
import UpdateLocationView from "../pages/Update-location-view.svelte";





export let category="";
export let name="";
export let latitude="";
export let longitude="";
export let description="";
export let locationid="";
export let stationid="";
export let img=""
// export let stations={};
let LocationList = [];
// export let currentLocationId;
// export let currentLocationStationId;




const  ChargingStationService=getContext("ChargingStationService");
const dispatch= createEventDispatcher();

async function deleteLocation(locationid) {
        // LocationList = await ChargingStationService.getLocationsByStationId(stationid);
        await ChargingStationService.deleteLocation(locationid);
        location.reload();

        
}

async function getLocation(locationid) {
        // LocationList = await ChargingStationService.getLocationsByStationId(stationid);
        let currentLocation=await ChargingStationService.getLocation(locationid);
        // return currentLocation;
        // alert(currentLocation._id)
        // currentLocationId=currentLocation._id;

        // alert(currentLocation.stationid)
        // currentLocationStationId=currentLocation.stationid;


        // alert("am working");
        location.replace(`/#/station/${stationid}/location/${locationid}`)
        return currentLocation;

        
}





</script>



<table class="table is-fullwidth">
  <thead>
    <tr>
      <th>Location Name</th>
      <th>Latitiude</th>
      <th>Longitude</th>
      <th>Category</th>
      <th>Description</th>
    </tr>
  </thead>
      <tbody>
      <tr>
        <td>
          {name}
        </td>
        <td>
          {latitude}
        </td>
        <td>
          {longitude}
        </td>
        <td>
          {category}
        </td>
        <td>
          {description}
        </td>
          <td>
            {#if locationid}
            <!-- <a href="/#/station/{stationid}/location/{locationid}" class="ui icon button" on:click|preventDefault={getLocation(locationid)}> -->
              <a href="" class="ui icon button" on:click|preventDefault={getLocation(locationid)}>

              <i class="fas fa-pen"></i>
              </a>
            {/if}
          <!-- <a href="" on:click|preventDefault={getLocation(locationid)} class="ui icon button"> -->
            <!-- <a href="/#/station/{stationid}/location/{locationid}" class="ui icon button">
            <i class="fas fa-pen"></i>
            </a> -->
        </td>
         <td>
          <a href="" on:click|preventDefault={deleteLocation(locationid)} class="ui icon button" >
            <i class="fas fa-trash"></i>
          </a>
        </td>
      </tr>
      <tr>
        <th>Location {name} Charger Image</th>
    </tr>
      <tr class="tr is-one-quarter">
    <td class="card-image">
    <figure>
      <!-- <img src={img} alt=""/>  -->
      <LocationImage stationid={stationid} locationid={locationid} img={img}/>

    </figure>
      </td>
      </tr>
  </tbody>
</table>
