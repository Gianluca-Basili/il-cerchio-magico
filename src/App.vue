<script>
import AppHeader from './components/AppHeader.vue';


export default {
  components:{
    AppHeader,
    
}
}
</script>
<template>
  <div id="app">
    <AppHeader />
   
    <router-view></router-view>
  </div>
</template>

<style lang="scss" scoped>
  @import '../styles/generals.scss';
</style>