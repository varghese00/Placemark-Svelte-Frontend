<script>
  import MenuPic from "../assets/MenuPic.jpg";
</script>

<div class="navbar is-primary">
  <div class="navbar-menu">
    <div class="navbar-start">
      <div class="box has-text-centered columns m-5">
        <div class="small-column">
          <img src={MenuPic} width="150px" alt="img" />
        </div>
      </div>
    </div>

    <div class="navbar-start">
      <div class="buttons">
        <a id="about" class="button" href="/#/about"> About </a>
        <a id="dashboard" class="button" href="/#/dashboard"> Dashboard </a>
        <a id="user-account" class="button" href="/#/user-account">User Account</a>
        <a id="admin-access" class="button " href="/#/admin-access">Admin Access</a>
        <a id="logout" class="button" href="/#/logout"> Logout </a>
        <a href="/#/map" class="column"><i class="fas fa-map-marked-alt fa-3x" style="color:rgb(102, 153, 255)"></i></a>
        <a href="/#/charts" class="column"><i class="fas fa-chart-line fa-3x" style="color:rgb(149, 93, 176)"></i></a>
      </div>
    </div>
  </div>
</div>
