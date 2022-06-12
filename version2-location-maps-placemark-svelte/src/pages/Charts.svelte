<script>
// @ts-nocheck


    import Menu from "../components/Menu.svelte";
    import Chart from 'svelte-frappe-charts';
    import {getContext, onMount} from "svelte";


    const ChargingStationService=getContext("ChargingStationService");


  


    // let chargers=['Type 1 5pin connector', 'Type 2 7pin connector', 'CCS/Combination Plug/Rapid Charging', 'CHAdeMO Plug', 'Domestic Socket 3pin connector', 'CEE Plug/Camping connector', "Tesla Supercharger"]
    let chargerCategory = {
      labels: ["Type 1 5pin connector", 'Type 2 7pin connector', 'CCS/Combination Plug/Rapid Charging', 'CHAdeMO Plug', 'Domestic Socket 3pin connector', 'CEE Plug/Camping connector', "Tesla Supercharger"],
      datasets: [
        {
          values: [0,0,0,0,0,0,0]
        }
      ]
    };

    let totalByUsers = {
    labels: [],
    datasets: [
      {
        values: []
      }
    ]
  }

  let totalCounties = {
    labels: [],
    datasets: [
      {
        values: []
      }
    ]
  }



  function populateByCounty(counties) {
      totalCounties.labels=[];
    counties.forEach(county => {
        totalCounties.labels.push(`${county.name}`)
        totalCounties.datasets[0].values.push(0);
 
    });
  }

  function populateByUsers(users) {
      totalByUsers.labels=[];
    users.forEach(user => {
        totalByUsers.labels.push(`${user.firstName} ${user.lastName}`)
        totalByUsers.datasets[0].values.push(0);});

        users.forEach((user, i) => {
      totalCounties.forEach(county => {
        if (county.user._id == user._id) {
          totalByUsers.datasets[0].values.push(0);
        }
      });
    });  
  }






    onMount(async()=>{
        let locations=await ChargingStationService.getAllLocations();
        locations.forEach(place => {
      if (place.category == "Type 1 5pin connector") {
        chargerCategory.datasets[0].values.push(0)
        chargerCategory.values[0]++;
      } else if (place.category == "Type 2 7pin connector") {
        chargerCategory.datasets[0].values[1].push(0)
        chargerCategory.values[1]++;

      }
      else if (place.category == "CCS/Combination Plug/Rapid Charging") {
        chargerCategory.datasets[0].values[2].push(0)
        chargerCategory.values[2]++;

      }
      else if (place.category == "CHAdeMO Plug") {
        chargerCategory.datasets[0].values[3].push(0)
        chargerCategory.values[3]++;

      }
      else if (place.category == "Domestic Socket 3pin connector") {
        chargerCategory.datasets[0].values[4].push(0)
        chargerCategory.values[4]++;

      }
      else if (place.category == "CEE Plug/Camping connector") {
        chargerCategory.datasets[0].values[5].push(0)
        chargerCategory.values[5]++;

      }
      else if (place.category == "Tesla Supercharger") {
        chargerCategory.datasets[0].values[6].push(0)
        chargerCategory.values[6]++;

      }
      
    })
    


    let counties=await ChargingStationService.getAllStations();
    let users = await ChargingStationService.getAllUsers();

    populateByCounty(counties);
    populateByUsers(users);
    


    })


  </script>
  

  <Menu/>
    <div class="column box has-text-centered">
      <h1 class="title is-4">Chargers Bar Chart</h1>
      <Chart data={chargerCategory} type="bar"/>
    </div>
    <div class="column has-text-centered">
        <h1 class="title is-4">Chargers: Line Chart</h1>
        <Chart data={chargerCategory} type="line"/>
      </div>
      <div class="column has-text-centered">
        <h1 class="title is-4">Users: Line Chart</h1>
        <Chart data={totalByUsers} type="line"/>
      </div>

      <div class="column has-text-centered">
        <h1 class="title is-4">Counties: Pie Chart</h1>
        <Chart data={totalCounties} type="pie"/>
      </div>
  