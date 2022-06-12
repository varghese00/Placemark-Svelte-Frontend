<script>
    import 'leaflet/dist/leaflet.css';
    import {LeafletMap} from '../services/leaflet-map';
    import {onMount,getContext} from "svelte";
  
  const ChargingStationService=getContext("ChargingStationService")

    const mapConfig = {
      location: {latitude: 52.160858, longitude: -7.152420},
      zoom: 8,
      minZoom: 1,
    };
    let map=null;
  
    onMount(async () => {
      map = new LeafletMap("location-map", mapConfig);
      map.showZoomControl();
      map.addLayerGroup("Locations");
      map.showLayerControl();


const locations=await ChargingStationService.getAllLocations();
locations.forEach(place=>{
    addLocationMarker(place)
})

function addLocationMarker(place){

    const locationDetails=`${place.category}${place.description} ${place.name} lat: ${place.latitude} lng: ${place.longitude}`;
    map.addMarker({latitude:place.latitude, longitude:place.longitude}, locationDetails, "Locations")
    map.moveTo(11, {latitude:place.latitude, longitude:place.longitude});

}



});
  </script>
  
  <div class="box" id="location-map" style="height:800px">
  </div>