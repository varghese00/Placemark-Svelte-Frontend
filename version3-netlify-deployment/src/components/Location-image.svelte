
<script>

import{getContext,createEventDispatcher} from "svelte";

const ChargingStationService = getContext("ChargingStationService");


const dispatch = createEventDispatcher();

export let locationid;
export let stationid;
export let img;
let fileinput;



const onFileSelected =(e)=>{
  let image = e.target.files[0];
            let reader = new FileReader();
            reader.readAsDataURL(image);
            reader.onload = e => {
                 img = e.target.result
            };
}





  async function uploadImage(){
        const success = await ChargingStationService.addImage(locationid, img[0]);
        if (success) {
            dispatch("message", {img})
            location.reload();
            // fileName = "";
        }
    }


</script>


<div class="card-content">
  <form on:submit|preventDefault={uploadImage}>
<div id="app">
        <button type="submit" class="button is-primary" >Upload</button><br>
        {#if img}
        <img class="img" src="{img}" alt="d" />
        {:else}
        <img class="img" src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png" alt="" /> 
        {/if}
				<img class="upload" src="https://static.thenounproject.com/png/625182-200.png" alt="" on:click={()=>{fileinput.click();}} />
        <div class="chan" on:click={()=>{fileinput.click();}}>Choose a ChargerImage</div>
        <input style="display:none" type="file" accept=".jpg, .jpeg, .png" on:change={(e)=>onFileSelected(e)} bind:this={fileinput}  >

</div>
</form>
</div>
<style>
	#app{
	display:flex;
		align-items:center;
		justify-content:center;
		flex-flow:column;
}
 
	.upload{
		display:flex;
	height:50px;
		width:50px;
		cursor:pointer;
	}
	.img{
		display:flex;
		height:200px;
		width:200px;
	}
</style>


