<template>
  <div class="swiperboard swindex">
    <swiper :options="swiperOption">
      <swiper-slide class="ssi"><img src="http://imgs.aixifan.com/block_1551272091767-MpEtuUbM9f?imageView2/1/w/508/h/260/q/100" alt=""></swiper-slide>
      <swiper-slide class="ssi"><img src="http://imgs.aixifan.com/cms/2019_02_19/1550560183792.jpg?imageView2/1/w/508/h/260/q/100" alt=""></swiper-slide>
      <swiper-slide class="ssi"><img src="http://imgs.aixifan.com/cms/2019_02_19/1550548496841.png?imageView2/1/w/508/h/260/q/100" alt=""></swiper-slide>
      <swiper-slide class="ssi"><img src="http://imgs.aixifan.com/cms/2019_02_19/1550557042453.jpg?imageView2/1/w/508/h/260/q/100" alt=""></swiper-slide>
      <swiper-slide class="ssi"><img src="../../assets/images/1.png" alt=""></swiper-slide> 
    </swiper>
    
    <!--以下看需要添加  
    <div class="swiper-scrollbar"></div> 
    <div class="swiper-button-next"></div> 
    <div class="swiper-button-prev"></div> 
    <div class="swiper-pagination"></div>  -->

   
   
  </div>
</template>

<script>

  import VueAwesomeSwiper from 'vue-awesome-swiper'
 import 'swiper/dist/css/swiper.css'//这里注意具体看使用的版本是否需要引入样式，以及具体位置。
 import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'indexswiper',
  data:function () {
    return {
      msg: 'indennav',
      swiperOption: {
           autoplay: 23000,
           speed: 1000,
      }
   
    }
  },
  components:{
    swiper,
    swiperSlide

  }

}
	 
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
