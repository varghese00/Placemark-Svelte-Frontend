<script>
import { onMount,getContext,createEventDispatcher } from "svelte";


  let allUsers=[];


const  ChargingStationService=getContext("ChargingStationService");
const dispatch = createEventDispatcher();


onMount(async()=>{
  allUsers=await ChargingStationService.getAllUsers();
  // allUsers=allUsers.data;
  // return allUsers;
}
)


async function deleteUser(userid) {  
        const success = await ChargingStationService.deleteUser(userid);
        if(success){
          location.reload();
             dispatch("message")
        }
    }


//    export async function reloadUsers(event){
//       allUsers=await ChargingStationService.getAllUsers();

// }


</script>


<h1 class="title">Lists of Users</h1>
<table class="table is-fullwidth">
  <thead>
    <tr>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Email</th>
      <th>Delete User</th>
    </tr>
  </thead>
  <tbody>
    {#each allUsers as user}
      <tr>
        <td>
          {user.firstName}
        </td>
        <td>
          {user.lastName}
        </td>
        <td>
            {user.email}
        </td>
        <td>
          <button on:click={deleteUser(user._id)} class="button is-danger">Delete User</button>
      <!-- <i class="fas fa-trash"></i> -->
        </td>
      </tr>
    {/each}
  </tbody>
</table>