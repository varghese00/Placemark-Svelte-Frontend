<script>

import WelcomeMenu from "../components/Welcome-menu.svelte";
import { push } from "svelte-spa-router";
import {getContext} from "svelte";

let firstName = "";
let lastName = "";
let email = "";
let password = "";
let errorMessage = "";

const ChargingStationService=getContext("ChargingStationService");

async function signup(){
  let success= await ChargingStationService.signup(firstName, lastName, email, password);
  if(success){ push("/login"); }
  else{
  //  alert(errorMessage)
    errorMessage="Error Signing Up"
  }
  
}

</script>


<WelcomeMenu/>


<section class="section">
  <h1 class="title">Sign up</h1>
  <form on:submit|preventDefault={signup}>
    <div class="field is-horizontal">
      <div class="field-body">

        <div class="field">
          <label for="firstname" class="label">First Name</label>
          <input bind:value={firstName} id="firstname" class="input" type="text" placeholder="Enter First Name" name="email">  
        </div>
        <div class="field">
          <label for="lastname" class="label">Last Name</label>
          <input bind:value={lastName} id="lasttname" class="input" type="text"  placeholder="Enter Last Name" name="lastName">
        </div>
      </div>
    </div>
    
    <div class="field">
      <label for="email" class="label">Email</label>
      <input bind:value={email} id="email" class="input" type="text" placeholder="Enter email" name="email">  
      </div>
    <div class="field">
      <label for="password" class="label">Password</label>
      <input bind:value={password} id="password" class="input" type="password" placeholder="Enter password" name="password">    
    </div>
    <div class="field is-grouped">
      <button class="button is-link">Submit</button>
    </div>
  </form>
</section>

{#if errorMessage}
  <div class="section">
    {errorMessage}
  </div>
{/if}