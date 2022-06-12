<script>
    import { getContext, onMount } from "svelte";

    let stations=[];
    let locations=[];
    let analytics={};




    const  ChargingStationService=getContext("ChargingStationService");



    onMount(async ()=>{
        stations=await ChargingStationService.getAllStations();
        analytics=await ChargingStationService.getAnalytics();



    })

</script>


<div class="box">

    <table class="table is-fullwidth">
    <thead>
            <h1 class="title">Application Analytics </h1>

        <tr>
            <th>Item</th>
            <th>Total</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td> 
                No. Of Counties Added
            </td>
            <td>
                {stations.length}
            </td>
        </tr>
        <tr>
            <td> 
                No. Of Locations Added
            </td>
            <td>
               <!-- {locations.length} -->
            </td>
        </tr>     
        <tr>
            <td>
                Most Added County
            </td>
            <td>
                {analytics.mostAddedCounty}
            </td>
        </tr> 
        <tr>
            <td>
                Least Added County 
            </td>
            <td>
                {analytics.leastAddedCounty}
            </td>
        </tr>
    </tbody>
  </div>