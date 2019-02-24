<template>
   
  <div class="news" ref="news" @touchmove="handleMove">
    <!--
	 <headerc :newsnums="list.length"></headerc> 
	 <headtle :tlename="msg"></headtle> 
	 -->
	  <div class="subheader" v-show="showAbs">
       <a @click.prevent="$router.go(-1);"><i class="mui-icon mui-icon-back"></i></a>
    </div>
    <transition name="t">
        <div class="subheaderX" v-show="!showAbs">
           <a @click.prevent="$router.go(-1);"><i class="mui-icon mui-icon-back"></i></a>
           <span>{{list.title}}</span>
      </div>
    </transition>
  
		 <div class="newsdetail_ct">  
		   <div>
           <div class="newsimg">
            <img :src="imgpath+list.img" alt="">
           </div>
          <div class="newsdetail_t"></div>
          <h3>{{list.title}}</h3>
          <h4>{{list.author}} <span>{{list.date}}</span> </h4>
          <div class="newsdetail_c">
                  {{list.content}}

          </div>
          <div class="" style="height:700px;background:#00aced"></div>
       </div>
		 </div>

 
	
      <!--  <footerc :newsnums="newsnum"></footerc> 
   
    -->
  </div>
</template>

<script>



//import bus from '../assets/js/bus.js';
export default {
  name: 'newsinfo',
  data:function () {
    return {
      msg: 'NEWS111',
	    list:{},
	    getif:false,
      uid:this.$route.params.id,
      showAbs: true,
      opacityStyle: { opacity: 0 },
       
     
     imgpath:'http://192.168.1.104/aj/images/news/'
	  
    }
  },
  components:{
  
  },
   activated () {
     // window.addEventListener('scroll', this.handleScroll)
    },
   methods:{
     getdata () {
	      var dataurl='http://192.168.1.104/aj/news.php';
	
	      this.$http.get(dataurl).then((res) => {
         //this.$alert("获取success");
          console.log(res);
         
          //this.list=res.body;//
          var arr=res.data;
          arr.forEach((item,i) => {
            //  console.log(item);
               // console.log("sss"+i);
               if(item.id==this.uid){
                 this.list=item;
             }
          });
			 
				//console.log(this.list)
      },(res)=>{
	 
		     this.getif=true;
	  });
   },
   handleScroll () {

     console.log("@@@@@@@@@@@@@@@@@");
    // var top=document.body.scrollTop || document.documentElement.scrollTop;
     var boxTop=this.$refs.news.scrollTop;
    console.log(boxTop);
     if(boxTop>40){
      this.showAbs=false;

     }else{
        this.showAbs=true;
     }
   },
  handleMove () {

     //console.log("@@@@@@moveeeeeeee@");
    // var box=this.$refs.news;
    // console.log(window.document.documentElement.scrollTop);

   }
	
  },

 created:function(){
    this.getdata();
 },
 mounted:function(){
   var self=this;
   this.lis=this.$refs.news;
   console.log(this.lis);
  
    this.$nextTick(() => {
      this.lis.addEventListener('scroll', ()=>{
          this.handleScroll();
     })

  })
  
 },
  updated:function(){
  
  // this.getdata();
 }


}
	 
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.news{height:100%;width:100%;position:absolute;font-size:0.25rem;overflow: scroll;}
.t-enter,t-leave{opacity:0;}
.t-enter-active,t-leave-active{transition: all 0.45s ease;}
</style>
