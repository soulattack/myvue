<template>
  <div class="indexnav">
    <!-- <h1 class="h_tle" >{{newsnums}}--11</h1> -->
    <ul class="indexnav">
        <li><router-link to=""><i><img src="../../assets/images/icon/263.png" alt=""></i><span></span></router-link></li>
        <li><router-link to="/city"><i><img src="../../assets/images/icon/264.png" alt=""></i><span></span></router-link></li>
        <li><router-link to="/news"><i><img src="../../assets/images/icon/267.png" alt=""></i><span></span></router-link></li>
        <li><router-link to=""><i><img src="../../assets/images/icon/268.png" alt=""></i><span></span></router-link></li>
        <li><router-link to="/news"><i><img src="../../assets/images/icon/267.png" alt=""></i><span></span></router-link></li>
        <li><router-link to=""><i><img src="../../assets/images/icon/268.png" alt=""></i><span></span></router-link></li>
        <li><router-link to="/news"><i><img src="../../assets/images/icon/267.png" alt=""></i><span></span></router-link></li>
        <li><router-link to="/clock"><i><img src="../../assets/images/icon/259.png" alt=""></i><span></span></router-link></li>
     
    
    </ul>
   
   
  </div>
</template>

<script>
export default {
  name: 'indexnav',
  data:function () {
    return {
      msg: 'indennav',
   
    }
  },
  props:['newsnums']

}
	 
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
