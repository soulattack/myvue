<template>
  <div class="mui-bar mui-bar-header myheader">
    <h1 class="h_tle" >{{newsnums}}--</h1>

   
   
  </div>
</template>

<script>
export default {
  name: 'headerIndex',
  data:function () {
    return {
      msg: 'headertop',
      msg2: 'headertop2',
	  list:{}
    }
  },
  props:['newsnums']

}
	 
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
