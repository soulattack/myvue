<template>
  <div id="app">
  <!-- <headerc></headerc>--> 
  <div class="main">
    <transition name="main">
     <router-view/>
   </transition>
  </div>
    <transition name="foottab">
     <footerc></footerc> 
    </transition>
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

.foottab-enter{position: absolute}
.foottab-leave-to{position: absolute}
.foottab-enter-active{transition:all 0.5s ease;}
.foottab-leave-active{transition:all 0.5s ease;}


.main-enter{opacity:0;transform:translateX(100%);position:absolute;}
.main-leave-to{opacity:0;transform:translateX(-100%);position:absolute;}
.main-enter-active{ transition:all 0.5s ease;}
.main-leave-active{ transition:all 0.5s ease;}



</style>










