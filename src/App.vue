<script>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';



export default {
  components:{
    AppHeader,
    AppFooter
    
  }
}
</script>
<template>
  <div id="app">
    <AppHeader />
    <router-view></router-view>
    <AppFooter></AppFooter>
  </div>
</template>
   

<style lang="scss" scoped>
  @import '../styles/generals.scss';
</style>