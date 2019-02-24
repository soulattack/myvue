<template>
  <div id="app">
  <!-- <headerc></headerc>--> 
  <div class="main">
    <transition>
     <router-view/>
   </transition>
  </div>
  <footerc></footerc> 
 <!--
  	
 -->
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; 
  height:100%;
  width:100%;
 
}




.v-enter{opacity:0;transform:translateX(100%);position:absolute;}
.v-leave-to{opacity:0;transform:translateX(-100%);position:absolute;}
.v-enter-active{ transition:all 0.5s ease;}
.v-leave-active{ transition:all 0.5s ease;}



</style>










