<template>
   
  <div class="minner">  
    <div  class="helloindex">        
     <swiperboard></swiperboard>
     <indexnav></indexnav>
     <!-- <div style="height:100px;"></div> -->
     <div><router-link to="/ch01">cc频道</router-link></div>
     <div>{{nnmum}}条新闻</div>   
     <transition name="showb">
       	 <router-view/>
     </transition>
  </div>	 
  </div>
</template>

<script>
import headindex from './HeaderIndex.vue'
import indexnav from './Index/IndexNav.vue'
import swiperboard from './Index/Indexboard.vue'

//import 'swiper/dist/css/swiper.css'////这里注意具体看使用的版本是否需要引入样式，以及具体位置。
 //import { swiper, swiperSlide } from 'vue-awesome-swiper'

import bus from '../assets/js/bus.js'
export default {
  name: 'index',
  data:function () {
    return {
      msg: '我是首页11',
     list:{},
     nnmum:11,
     // swiperOption: {
       // autoplay: 3000,
       // speed: 1000,
     // }
    
    }
  },
  components:{
   headindex:headindex,
   indexnav:indexnav,
    //swiper,
     // swiperSlide
   swiperboard
  },
     props:['newsnums'],
   
   mounted:function(){
 
   
   }

}
	 
</script>

<!-- Add "scoped" ,showb 为该子项目显示的自定义形式-->
<style scoped>
 .showb-enter{opacity:0; position:absolute;}
 

.showb-leave-to{opacity:0;  position:absolute;}

   
.showb-enter-active{ transition:all 0.25s ease;}
.showb-leave-active{ transition:all 0.25s ease;}
</style>
