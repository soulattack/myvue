<template>
   
  <div class="news">
    <!--
	 <headerc :newsnums="list.length"></headerc> 
	 -->
	     <headtle :tlename="msg"></headtle>
		   <div class="news_c">  
		     <div v-if="getif"> <span class="fallmsg">获取失败,请检测网络是否连接</span></div>
		     <ul class="newslist">
	         <li v-for="item in list" :key="item.id" >
		    		<router-link :to="'/NewsInfo/'+item.id">		
		         <dl>
					  	<dt><b>评论</b><span>{{item.discuss}}</span></dt>
		          <dd>
				        <h5 class="news-tle">{{item.title}}</h5> 
				        <p class="news-flo"> <span>{{item.author}} </span><span>{{item.date}}  </span>  <span><i class="mui-icon mui-icon-eye"></i>{{item.read}} </span></p>
			    	
				     </dd>
		       </dl>
			    </router-link>
		     </li>		  
	      </ul>
		 	<div>{{list.length}}--</div>
		 </div>

 
	
      <!--  <footerc :newsnums="newsnum"></footerc> 
   
    -->
  </div>
</template>

<script>
import headtle from './headerTitle';


import bus from '../assets/js/bus.js';
export default {
  name: 'news',
  data:function () {
    return {
      msg: 'NEWS111',
	  list:{},
	  getif:false,
	  newslen:0,
	  item:null
	  
    }
  },
  components:{
    headtle
  },
   methods:{
   getdata(){
	      var dataurl='http://192.168.1.104/aj/news.php';
	
	      this.$http.get(dataurl).then((response) => {
        //this.$alert("获取success");
          this.list=response.body;//
		  this.newslen=response.body.length;
			    this.item=response.body.length;
      },(response)=>{
	     // console.log("shibai");
	     //this.$alert("获取失败 请检查网络状态");
		 this.getif=true;
	  });
	},
	
	sendmsg(){
	  var m=this.list.length; 
	    //var m=this.item; 
	  // bus.$emit("sendinfo",this.newslen);
	   bus.$emit("sendinfo",m);
	
	}
 
  },

 created:function(){
   this.getdata();
 },
 mounted:function(){
  
   //   this.sendmsg();
 },
  updated:function(){
  
  this.sendmsg();
 }


}
	 
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.news{font-size:0.25rem;}
</style>
