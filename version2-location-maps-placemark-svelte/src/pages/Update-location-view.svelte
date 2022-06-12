<script>
import { createEventDispatcher, getContext, onMount } from "svelte";
import Menu from "../components/Menu.svelte";
// import currentLocationId from "../components/Location.svelte"
// import currentLocationStationId from "../components/Location.svelte"






const  ChargingStationService=getContext("ChargingStationService");
const dispatch= createEventDispatcher();

let currentLocation={};
// export let params;
let url=window.location.href;
// alert(url.toString())
// alert(typeof(url))
url=url.toString();
const strs = url.split('/');
const locationid = strs.at(-1)
const stationid= strs.at(-3)
console.log(locationid)
console.log(stationid)


onMount(async ()=> {
  // alert("am working");

       currentLocation= await ChargingStationService.getLocation(locationid);
      //  alert("am working");

       return currentLocation;
})

async function updateLocations(){
  const success=await ChargingStationService.updateLocation(stationid,locationid,currentLocation)
  if (success){
    location.replace(`/#/station/${stationid}`);
  }
}


</script>

<Menu/>

<form on:submit|preventDefault={updateLocations}>
  <strong>Enter Updated Details</strong>
  <div class="field is-horizontal">
    <div class="field-body">

      <div class="field">
        <label for="name" class="label"></label>
        <input class="input" type="text" id="name" placeholder="Enter area name" name="name" bind:value={currentLocation.name} />
      </div>

      <div class="field">
        <label for="latitude" class="label"></label>
        <input class="input" id="latitude" step="0.0000001" maxlength="10" min="-90.0000000" max="90.0000000" type="number" placeholder="Enter latitude" name="latitude" bind:value={currentLocation.latitude} />
      </div>

      <div class="field">
        <label for="longitude" class="label"></label>
        <input class="input" id="longitude" bind:value={currentLocation.longitude} step="0.0000001" maxlength="10" min="-180.0000000" max="180.0000000" type="number" placeholder="Enter longitude" name="longitude" />
      </div>
      <div class="field">
        <label for="category" class="label"></label>
        <div class="select">
          <select bind:value={currentLocation.category} name="category" id="category" title="category">
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
          bind:value={currentLocation.description}
        ></textarea>
      </div>

    </div>
  </div>
  <button class="button is-primary">Update Location</button>
</form>