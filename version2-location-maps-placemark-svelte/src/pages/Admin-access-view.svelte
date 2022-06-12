
<script>
    import Menu from "../components/Menu.svelte";
    import ListUsers from "../components/List-users.svelte";
import Analytics from "../components/Analytics.svelte";
// let users=undefined;
// let stations;
// let locations;
// let mostAddedCounty;
// let leastAddedCounty;

// async function reloadUsers(event){
//     await users.reloadUserList()
//     location.reload();
// }

</script>

<Menu/>



  <section class="section">
<ListUsers /> 
<Analytics/> 
</section>
