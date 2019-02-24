<template>
  <div class="swiperboard">
       <swiper :options="swiperOption">
      <!-- <swiper-slide><img src="static/images/jay.jpg"></swiper-slide>
      <swiper-slide><img src="static/images/jay.jpg"></swiper-slide>
      <swiper-slide><img src="static/images/jay.jpg"></swiper-slide>
      <swiper-slide><img src="static/images/jay.jpg"></swiper-slide>
      <swiper-slide><img src="static/images/jay.jpg"></swiper-slide>
      <swiper-slide><img src="static/images/jay.jpg"></swiper-slide> -->
        <swiper-slide>11111</swiper-slide>
    </swiper>
    <!--以下看需要添加
    <div class="swiper-scrollbar"></div> 
    <div class="swiper-button-next"></div> 
    <div class="swiper-button-prev"></div> 
    <div class="swiper-pagination"></div> 
   -->
   
   
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
           autoplay: 3000,
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
