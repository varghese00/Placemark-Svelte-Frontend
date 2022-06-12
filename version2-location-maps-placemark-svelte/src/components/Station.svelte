<script>
    import {createEventDispatcher,getContext} from 'svelte';


    export let name;
    export let stationid;
    // export let refreshStationList={
    //     async function(){
    //     const refreshUserStations=await ChargingStationService.getUserStations();
    //     return refreshUserStations;
    //     }
    // }

    const dispatch = createEventDispatcher();
    const  ChargingStationService=getContext("ChargingStationService");

  async function deleteStation(){
  const success=await ChargingStationService.deleteStation(stationid);
  if(success)
    {
      dispatch("delete");
      location.reload()
    //   return refreshStationList;
    }
  }



   
</script>

<div class="box box-link-hover-shadow">
    <h2 class="title">
        {name}
    </h2>
    <a href="/#/station/{stationid}" class="button">
      <span class="icon is-small">
        <i class="fas fa-folder-open"></i>
      </span>
    </a>
    <button on:click={deleteStation}  class="button">
        <span class="icon-is-small">
          <i class="fas fa-trash"></i>
        </span>
          </button> 

          


</div>