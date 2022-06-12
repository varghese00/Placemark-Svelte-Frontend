<script>
  import {createEventDispatcher,getContext} from "svelte";
  import { user } from "../stores.js";
  import { get } from "svelte/store";
import { push } from "svelte-spa-router";


  const  ChargingStationService=getContext("ChargingStationService");
  const dispatch= createEventDispatcher();

 export let name="";
  let errorMessage="";
  let currentUser;


  async function addStation(){
    const newStation={
      name:name,
    };
    const success=await ChargingStationService.addStation(newStation);
    if(success)
    {
      dispatch("message",{name:newStation})
      // name="";
      location.reload();

      // alert(name);
      name="";
    }
    else{
      alert("Something went wrong !");
      // alert(name);
    }
  };

  



</script>

<form on:submit|preventDefault={addStation}>
    <label for="name" class="label">Station County</label>
    <!-- <input bind:value={name} id="name" class="input" type="text" placeholder="Enter county name" name="name" /> -->

<div class="select is primary">
  <select bind:value={name} name="name" id="name">
        <option></option>
        <option>Armagh</option>
        <option>Carlow</option>
        <option>Cavan</option>
        <option>Clare</option>
        <option>Cork</option>
        <option>Derry</option>
        <option>Donegal</option>
        <option>Down</option>
        <option>Dublin</option>
        <option>Fermanagh</option>
        <option>Galway</option>
        <option>Kerry</option>
        <option>Kildare</option>
        <option>Kilkenny</option>
        <option>Laois</option>
        <option>Leitrim</option>
        <option>Limerick</option>
        <option>Longford</option>
        <option>Louth</option>
        <option>Mayo</option>
        <option>Meath</option>
        <option>Monaghan</option>
        <option>Offaly</option>
        <option>Roscommon</option>
        <option>Sligo</option>
        <option>Tipperary</option>
        <option>Tyrone</option>
        <option>Waterford</option>
        <option>Westmeath</option>
        <option>Wexford</option>
        <option>Wicklow</option>
  </select>
</div>
<button class="button is-link">Add County</button>
</form>

{#if errorMessage}
<div class="section">
  {errorMessage}
</div>
{/if}









