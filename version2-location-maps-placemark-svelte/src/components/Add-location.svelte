<script>
import { getContext,onMount,createEventDispatcher } from "svelte";
// import stationId from "./Location.svelte"


// import addStationLocation from "../components/List-locations.svelte";
let errorMessage = "";
export let stationid;
// export let stations={};
// // let stationid;

const  ChargingStationService=getContext("ChargingStationService");
const dispatch= createEventDispatcher();

// onMount(async () => {
//     stations=await ChargingStationService.getStation(stations._id);
//     stations=stations.data;
//     stationId=stations._id;
//     return stations;
//   })


let category="";
let name="";
let latitude="";
let longitude="";
let description="";
// let location;
// let img=""


async function addStationLocation(){
  const newLocation={
    stationid:stationid,
    name:name,
    latitude:latitude,
    longitude:longitude,
    description:description,
    category:category,
  }
  
  const success=await ChargingStationService.createLocation(stationid,newLocation);
  if(success)
    {
      alert("location adding")
      dispatch("message",{location:newLocation})
      location.reload();
      name="";
      latitude="";
      longitude="";
      description="";
      category="";

    }
    else{
      alert("Something went wrong while adding station !");
    }
  
  // return true;
}


</script>

<form on:submit|preventDefault={addStationLocation} >
  <label for="locationName" ></label>
  <div class="field is-horizontal">
    <div class="field-body">

      <div class="field">
        <label for="name" class="label"></label>
        <input class="input" type="text" id="name" placeholder="Enter area name" name="name" bind:value={name} />
      </div>

      <div class="field">
        <label for="latitude" class="label"></label>
        <input class="input" id="latitude" step="0.0000001" maxlength="10" min="-90.0000000" max="90.0000000" type="number" placeholder="Enter latitude" name="latitude" bind:value={latitude} />
      </div>

      <div class="field">
        <label for="longitude" class="label"></label>
        <input class="input" id="longitude" bind:value={longitude} step="0.0000001" maxlength="10" min="-180.0000000" max="180.0000000" type="number" placeholder="Enter longitude" name="longitude" />
      </div>
      <div class="field">
        <label for="category" class="label"></label>
        <div class="select">
          <select bind:value={category} name="category" id="category" title="category">
            <option></option>
            <option value="Type 1 Plug">Type 1 5pin connector</option>
            <option value="Type 2 Plug">Type 2 7pin connector</option>
            <option value="Combination Plug">CCS/Combination Plug/Rapid Charging</option>
            <option value="CHAdeMO plug">CHAdeMO Plug</option>
            <option value="Type 2 Plug">Type 2 7pin connector</option>
            <option value="Domestic Socket">Domestic Socket 3pin connector</option>
            <option value="CEE Plug">CEE Plug/Camping connector</option>
            <option value="Tesla Supercharger">Tesla Supercharger</option>

          </select>
        </div>
      </div>
      <div class="field">
        <label for="description" class="label"></label>
        <textarea
          class="textarea is-input has-fixed-size"
          placeholder="Eg: Shopping Mall, Parking Lot, Fuel Station,On Street"
          type="text"
          maxlength="200"
          pattern="[A-Za-z\\s]+{1-20}"
          name="description"
          bind:value={description}
        ></textarea>
      </div>

    </div>
  </div>

  <button class="button is-primary">Add Location</button>
</form>

{#if errorMessage}
  <div class="section">
    {errorMessage}
  </div>
{/if}