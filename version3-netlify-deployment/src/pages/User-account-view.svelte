<script>
  import Menu from "../components/Menu.svelte";
  import {push} from "svelte-spa-router";
  import {onMount,getContext,createEventDispatcher} from "svelte";

  const  ChargingStationService=getContext("ChargingStationService");
  export let userDetail={};
  // export let user={};
  const dispatch = createEventDispatcher();


  onMount(async () => {
    userDetail=await ChargingStationService.getLoggedInUser();
    userDetail=userDetail.data;
  })

  async function deleteMyAccount(){
    const deleteMe=await ChargingStationService.deleteUser(userDetail._id);
    if (deleteMe){
      dispatch("message")
      push("/")
    }
  }

  async function updateAccountDetails(){
    const updateMyDetails=await ChargingStationService.updateUserDetails(userDetail._id,userDetail);
    if (updateMyDetails){
      dispatch("message", {user:userDetail});
      push("/login");
    }
  }
  
    
  

</script>

<Menu/>


<section class="section">
<form on:submit|preventDefault={updateAccountDetails}>
    <h1 class="title">My Account Details</h1>
    <h3 class = "subtitle">Edit My Details</h3>
    <div class="field is-horizontal">
      <div class="field-body">
        <div class="field">
          <label for="firstName" class="label">First Name</label>
          <input class="input" type="text" name="firstName" bind:value={userDetail.firstName}>
        </div>
        <div class="field">
              <label for="lastName" class="label">Last Name</label>
          <input class="input" type="text" name="lastName" bind:value={userDetail.lastName}>
        </div>
      </div>
    </div>
    <div class="field">
      <label for="email" class="label">Email</label> <input class="input" type="text" name="email" bind:value={userDetail.email}>
    </div>
    <div class="field">
      <label for="password" class="label">Password</label> <input class="input" type="password" name="password" bind:value={userDetail.password}>
    </div>
    <div class="field">
      <button class="button is-warning">Submit</button>
    </div>
    </form>
    <div>
      <h1> Delete My Account</h1>
      <button on:click={deleteMyAccount} class="button is-danger">
        <span class="icon-is-small">
      <i class="fas fa-trash"></i>
      </span>
    </div>
</section>