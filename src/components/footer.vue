<template>
   <footer class="mui-bar mui-bar-tab myfooter"  v-show="$store.state.showme">
    <div class="footer">
      <router-link to="/index" class="mui-tab-item">
	    <!-- <i class="icon iconfont icon-bianji"></i><b>首页</b> -->
		        <span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">主页</span>
	  </router-link>
      <router-link to="/news" class="mui-tab-item">
	  <!-- <i class="icon iconfont icon-chat"></i><b>新闻</b> -->
	    <span class="mui-icon mui-icon-chatbubble"></span>
				<span class="mui-tab-label">新闻</span>
	  </router-link>
  
      <router-link to="/user" class="mui-tab-item">
	   <!-- <i class="icon iconfont icon-person"></i><b>个人</b> -->
	          <span class="mui-icon mui-icon-person"></span>
			    	<span class="mui-tab-label">个人</span>
	   </router-link>
    
      <router-link to="/news" class="mui-tab-item " id="a2">
				<span class="mui-icon mui-icon-email">
				<!-- <span class="mui-badge" >{{nnmum}}</span> -->
				<span class="mui-badge" v-show="nnmum>0?true:false">{{nnmum}}</span>
				</span>
				<span class="mui-tab-label">消息</span>
	  </router-link>

   
   
    </div>
  </footer>
</template>

<script>
import bus from '../assets/js/bus.js'

export default {
  name: 'footerbot',
  data:function () {
    return {
      msg: 'WelcomeMY',
	  list:{},
		nnmum:null
	//	showor:this.$store.state.showme
    }
  },
   props:['newsnums'],
   
   mounted:function(){
      var self=this;
	  bus.$on("sendinfo",info=>{
	    self.nnmum=info;
	  
	  })
   
   
	 },
	 created:function(){

		// this.$store.state.showme=false
	 }

}
	 
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
