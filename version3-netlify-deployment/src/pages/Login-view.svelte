
<script>
import { getContext } from "svelte";

  import {push} from "svelte-spa-router";
  import WelcomeMenu from "../components/Welcome-menu.svelte";


const ChargingStationService=getContext("ChargingStationService");

let email="";
let password="";
let errorMessage="";

async function login(){
  alert("checking login success")
  let success = await ChargingStationService.login(email, password)
if (success)
{
  alert("going to dashboard")
  push("/dashboard");
}
else
{
  email = "";
  password = "";
  errorMessage = "Invalid Credentials";
}
}

</script>

<WelcomeMenu/>



<form on:submit|preventDefault={login}>
  <div class="field">
    <label class="label" for="email">Email</label>
    <input bind:value={email} class="input" id="email" name="email"placeholder="Enter email" type="text">
  </div>
  <div class="field">
    <label class="label" for="password">Password</label>
    <input bind:value={password} class="input" id="password" name="password" placeholder="Enter Password" type="password">
  </div>
  <div class="field is-grouped">
    <button class="button is-link">Log In</button>
  </div>
</form>