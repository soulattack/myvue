<template>

    <!-- <headsearch></headsearch> -->
  <div class="bswrapp usercenter" ref="wrapp">
    <div class="">
     <dl>
       <dt><span><img :src="imgpath+list.headimg"></span></dt>
      <dd>
       <p class="username">
       <span>ID:{{ list.id }}</span><span>{{ list.name }}</span>
       </p>  
      <p>
        <span><b>{{ list.followsnum }}</b>关注</span><span><b>{{ list.fansnum }}</b>粉丝</span>   
	     </p>
   </dd>
  </dl>

   <ul>
      <!--     <span class="icon iconfont" >&#xeb74;</span>
      <span class="icon iconfont icon-zuzhizhankai"></span> -->
     <br/> <br/> <br/> <br/> <br/><br/> <br/> <br/><br/><br/>
     <br/> <br/> <br/> <br/> <br/><br/> <br/> <br/><br/><br/>
    
   
    <li>{{ list.level }}</li>
	 <br/> <br/> <br/> <br/> <br/><br/> <br/> <br/><br/><br/>
	   <li>{{ list.level }}</li>
	 <br/> <br/> <br/> <br/> <br/><br/> <br/> <br/><br/><br/>
   </ul>  

   

  </div>
 </div>

</template>

<script>
import btScroll from 'better-scroll'
import headsearch from './headerTitle.vue'
export default {
  name: 'User',
  data:function () {
    return {
      msg: 'USER info',
	  list:{},
	  imgpath:'http://192.168.1.104/aj/'
	  
    }
  },
  components:{
           headsearch

  },
  methods:{
    userinfo(){
	  var dataurl="http://192.168.1.104/aj/userinfo.php";
	  this.$http.get(dataurl).then((res)=>{
	    //console.log(res.body)
	    this.list=res.body;
	  
	  });
	
	}	
  },
  created:function(){
    this.userinfo();
  
  },
  mounted:function(){


   this.scroll=new btScroll(this.$refs.wrapp);
  }

}
	 
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
