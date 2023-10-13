<template>
  <header>
    <div class="container navbar d-flex flex-row align-items-center ">
      
        <div class="col-6 d-none d-md-block d-lg-block">
          <img src="../assets/logo/logo.jpg" alt="" height="80">
        </div>
        <div class="col-6 d-flex justify-content-end d-none d-md-block d-lg-block">
          <ul class="navbar-nav d-flex flex-row justify-content-end">
            <li class="nav-item nav_item_hover mx-2">
              <router-link :to="'/'" class="text">Home</router-link>
            </li>
            <li class="nav-item nav_item_hover mx-2">
              <router-link to="/LeNostreAttivita" class="text">Le Attività</router-link>
            </li>
            <li class="nav-item nav_item_hover mx-2">
              <router-link to="/LaNostreEquipe" class="text">L'equipe</router-link>
            </li>
            <li class="nav-item nav_item_hover mx-2">
              <router-link :to="'/Contatti'" class="text">Contatti</router-link>
            </li>
          </ul>

        </div>
     
  </div>
  
      <!-- Home -->
  </header>
  <!-- Navbar for Smartphone -->
  <nav class="navbar navbar-dark  d-sm-none">
    <div class="container-fluid">
      <div class="col-xs-12 col-md-4 col-lg-4">
        <img src="../assets/logo/logo.jpg" alt="" height="90">
      </div>
      <button class="navbar-toggler bg-secondary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    </div>
  </nav>
  <div class="offcanvas offcanvas-end text-bg-white" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
    <div class="offcanvas-header d-flex justify-content-end">
      
      <button type="button" class="btn-close btn-close-dark " data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
        <li class="nav-item my-3">
          <router-link :to="'/'" class="text  "><strong>Home</strong></router-link>
        </li>
        <li class="nav-item my-3">
          <router-link :to="'/LeNostreAttivita'" class="text "><strong>Le Attivita</strong></router-link>
        </li>
        <li class="nav-item my-3">
          <router-link :to="'/LaNostreEquipe'" class="text "><strong>L'equipe</strong></router-link>
        </li>
        <li class="nav-item my-3">
          <router-link :to="'/Contatti'" class="text "><strong>Contatti</strong></router-link>
        </li>
        
      </ul>
      
    </div>
  </div>
</template>


<style lang="scss" scoped>
@import '../styles/generals.scss';



.nav_item_hover:hover {
  font-weight: 900;
  border-bottom: 1px solid;
  border-width: thin;
}

.nav_auth_hover:hover {
  border-top: 1px solid;
  border-width: thin;
}

.nav_itemdrop_hover:hover {
  color: white;
}

.nav_drop_menu {
  background-color: rgba(245, 222, 179, 0.5);
}

.text {
  text-decoration: none;
  color: black;
  
}
</style>
