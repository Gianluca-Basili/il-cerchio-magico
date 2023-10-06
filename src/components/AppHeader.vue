<script>
export default {
  
}
</script>
<template>
  <header>
    <div class="container navbar d-flex justify-content-center">
      <div class="row">
        <div class="col-12">
          <img src="../logo/logo.jpg" alt="" height="80">
        </div>
      </div>
      <ul class="navbar-nav ">
        <!-- home  -->                        
        <li class="nav-item nav_item_hover mx-5">
            <router-link :to="'/'" class="nav-link text-dark ms-0 ms-md-2 fs-6 p-1 ">
                Home
            </router-link>
        </li>
        
    </ul>
    <ul class="navbar-nav  ">
        <!-- contatti  -->                        
        <li class="nav-item nav_item_hover mx-5">
            <router-link :to="'/'" class="nav-link text-dark ms-0 ms-md-2 fs-6 p-1 ">
                contatti
            </router-link>
        </li>
    </ul>
    <ul class="navbar-nav ">
        <!-- chi siamo -->                        
        <li class="nav-item nav_item_hover mx-5">
            <router-link :to="'/'" class="nav-link text-dark ms-0 ms-md-2 fs-6 p-1 ">
              chi siamo
            </router-link>
        </li>
    </ul>
    </div>
    
  </header>
</template>
<style lang="scss" scoped>
  @import '../styles/generals.scss';
  .nav_item_hover:hover {
    font-weight: 900;
    border-bottom: 1px solid;
    border-width: thin;
}

</style>
