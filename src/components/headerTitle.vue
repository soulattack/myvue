<template>
  <div class="mui-bar mui-bar-header myheaderx">  
 <!--     <h3>  </h3>  
     <h3>  </h3>  
     <h3>  </h3>   -->
     <a class="top_back"><b class="mui-icon mui-icon-back" @click="back"></b></a>
     <!-- {{tlename}} -->
	 <span class="top_search"><span class="top_search_in"><b class="mui-icon mui-icon-search"></b><input type="text"/></span></span>
	 <span class="top_more"><b class="mui-icon mui-icon-more"></b></span>
   
  </div>
</template>

<script>
export default {
  name: 'headertitle',
  data:function () {
    return {
      msg: 'headertop',
      msg2: 'headertop2',
	  list:{}
    }
  },
  props:['tlename'],
  methods:{
    back(){	
	 this.$router.go(-1);	
	}
  
  
  }

}
	 
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.myheader{background:#00aced}
.myheader h3{text-align:left; font-size:12px;}
</style>
