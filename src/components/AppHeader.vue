<template>
  <header>
    <div class="container-fluid navbar d-flex flex-row align-items-center justify-content-center">
      <div>
        <img src="../assets/logo/logo.jpg" alt="" height="80">
      </div>
      <ul class="navbar-nav d-flex flex-row">
        <!-- home  -->                        
        <li class="nav-item nav_item_hover mx-2 ">
          <router-link :to="'/'" class="text">
          Home
          </router-link>
         
        </li>
        <!-- contatti  -->                        
        <li class="nav-item nav_item_hover mx-2  ">
         <router-link to="/contatti" class="text">Contatti</router-link>
        
        </li>
        <!-- chi siamo -->                        
        <li class="nav-item nav_item_hover mx-2  ">
         <router-link to="/chi-siamo" class="text">Chi siamo</router-link>
          
        </li>
      </ul>
    </div>
  </header>
</template>
<style lang="scss" scoped >

@import '../styles/generals.scss';



.hamburger_menu {
    padding: 3px !important;
    box-shadow: none !important;
}
.hamburger_menu:hover {
    background: linear-gradient(60deg, #ffffff76 40%, ) !important;
}

.nav_item_hover:hover {
    font-weight: 900;
    border-bottom: 1px solid;
    border-width: thin;
}
.nav_auth_hover:hover {
   
    border-top: 1px solid ;
    border-width: thin;
}
.nav_itemdrop_hover:hover {
    
    color: white;
}
.nav_drop_menu {
    background-color: rgba(245, 222, 179, 0.5);
}

.text{
  text-decoration: none;
  color: black;
}
</style>


