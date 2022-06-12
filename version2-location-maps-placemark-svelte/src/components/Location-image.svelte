
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



	
// 	const onFileSelected =(e)=>{
//   let image = e.target.files[0];
//             let reader = new FileReader();
//             reader.readAsDataURL(image);
//             reader.onload = e => {
//                  img = e.target.result
//             };
// }


// function onFileSelected(event) {
//       if (event.target.files.length > 0) {
//         fileinput = event.target.files[0].name;
//       }
//     };




  async function uploadImage(){
        const success = await ChargingStationService.addImage(locationid, img[0]);
        if (success) {
            dispatch("message", {img})
            // location.reload();
            // fileName = "";
        }
    }


</script>

<!-- <div class="column has-text-centered">
  <div class="box">
    <form on:submit|preventDefault={uploadImage}>
        <div id="file-select" class="file has-name is-fullwidth">
            <label class="file-label">
        <input 
          type="file" on:change={onFileSelected}
          bind:files={img} style="display:none"/>
        <br />
        <span class="file-cta">
            <span class="file-icon">
              <i class="fas fa-upload"></i>
            </span>
            <span class="file-label">
              Choose an Image to upload…
            </span>
           </span>
          <span class="file-name">{fileinput}</span>
        </label>
        <input type="submit" />
      </form>
  </div>
</div> -->

<!-- 
<div class="card">
  <div class="card-image">
    <figure class="image is-4by3">
      <img src={img} >
    </figure>
  </div>
  <div class="card-content">
    <form href="/station/{stationid}/uploadLocationImage/{locationid}"  enctype="multipart/form-data">

      <div id="file-select" class="file has-name is-fullwidth">
        <label class="file-label"> <input class="file-input"  type="file" name="resume" accept="image/png, image/jpeg">
          <span class="file-cta">
            <span class="file-icon">
              <i class="fas fa-upload"></i>
            </span>
            <span class="file-label">
              Choose a charger pic..(optional)
            </span>
           </span>
          <span class="file-name" id="file-name-{locationid}"></span>
        </label>
        <button type="submit" class="button is-info">Upload</button>
      </div>
    </form>
  </div>
</div> -->

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



<!-- <div class="card">
  <div class="card-image">
    <figure class="image is-4by3">
      <img src={img} >
    </figure>
  </div>
  <div class="card-content">
    <form on:submit|preventDefault={uploadImage}>
      <div id="file-select" class="file has-name is-fullwidth">
        <label class="file-label"> 
          <input class="file-input" type="file"  on:change={onchange} bind:files={img}  >
          <span class="file-cta">
            <span class="file-icon">
              <i class="fas fa-upload"></i>
            </span>
            <span class="file-label">
              Choose a charger pic..(optional)
            </span>
           </span>
          <span class="file-name" id="file-name-{_id}"></span>
        </label>
        <button type="submit" class="button is-info">Upload</button>
      </div>
    </form>
  </div>
</div>  -->

<!-- {log this} -->


