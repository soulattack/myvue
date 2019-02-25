<template>
  <div class="channel" @click="close">
   <div class="ch_inner">
<!--    
    <h2> <a @click.prevent="$router.go(-1);">fanhui</a></h2>
    <h2><router-link to="/index">返回</router-link></h2>
    <h3>{{ msg }}----时间</h3> -->
     <div class="clock" id="clock" >
       <div>
         {{time}}
           <!--
            <img src="../../assets/images/number/10.png" alt=""> 
            <img :src="src10" alt=""> -->
       </div>
       <div class="clockbox" id="times">
         <!-- <img src="../../assets/images/number/1.png" alt=""> <img src="../../assets/images/number/1.png" alt=""> 
         <img src="../../assets/images/number/1.png" alt="">  <img src="../../assets/images/number/1.png" alt="">
         <img src="../../assets/images/number/1.png" alt="">  <img src="../../assets/images/number/1.png" alt="">
         -->

        <img   v-for="(item,i) in 6 "  :key="item" :ref="i" :alt="i"/>                    
       </div>
     </div>
   
   </div>
  </div>
</template>

<script>
import img10 from '@/assets/images/number/10.png'
//import imgjson from '@/assets/images/number/numberImg.json'
export default {
  name: 'channel01',
  data:function () {
    return {
      msg: '时钟',
      list:{},
      src10:img10,
      /****  本地图片在js获取时候 必须用require方法获取 不然 src地址会被解析成单纯的字符串 无法识别真正的url */
      imglist:[
         {src:require('../../assets/images/number/0.png')},
         {src:require('../../assets/images/number/1.png')},
         {src:require('../../assets/images/number/2.png')},
         {src:require('../../assets/images/number/3.png')},
         {src:require('../../assets/images/number/4.png')},
         {src:require('../../assets/images/number/5.png')},
         {src:require('../../assets/images/number/6.png')},
         {src:require('../../assets/images/number/7.png')},
         {src:require('../../assets/images/number/8.png')},
         {src:require('../../assets/images/number/9.png')}
         
      ],
      time:'',
      timer:null
    }
  },
  methods:{
    clock () {
      var time=new Date();
      
       
      var h=this.toDouble(time.getHours());
      var m=this.toDouble(time.getMinutes());
      var s=this.toDouble(time.getSeconds());
     //  this.time=h+":"+m+":"+s;
      // var str=str=this.toDouble(time.getHours())+this.toDouble(time.getMinutes())+this.toDouble(time.getSeconds());
       var str=h+""+m+""+s;
        console.log(str);
      //  var tm=document.getElementById("times");
			 // var cImg=tm.getElementsByTagName("img"); 
       
        var numimgs=this.$refs;
            // console.log(numimgs);
             var imgArr=[];
            for (let i in numimgs) {
                 imgArr.push(numimgs[i][0]); //属性
               
          }
          console.log(imgArr);
         // console.log(cImg);

			  for( var i=0;i<imgArr.length;i++){
			 
			  //  cImg[i].src="../../assets/images/number/"+str[i]+".png";
			        // cImg[i].src=this.src10;
        //imgArr[i].src="static/images/number/"+str[i]+".png";
          console.log(this.imglist[str[i]].src);
        // imgArr[i].src=this.imglist[str[i].src];
         imgArr[i].src=this.imglist[str[i]].src;
        // imgArr[i].src=require('../../assets/images/number'+str[i]+'.png');			 
	   		}

    },
    toDouble (mm){
     if(mm<10){
      mm="0"+mm;
      }else{
      mm=mm;
      }
      return mm;
    },
    close (){
      //this.timer=null; 
     
      this.$router.go(-1);
      
    }
    
  },

  mounted:function(){
    this.clock();
    this.timer= setInterval(this.clock,1000);
  // 

  },
  updated:function(){
  
  },
  beforeDestroy() {              // 当退出当前页面时候 必须组件销毁前 清除定时器 不然定时器会一直执行
    //clearInterval(this.timer);
    clearInterval(this.timer);
  }
}
	 
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.channel{width:100%;height:100%; position:absolute;top:0; left: 0; z-index:999;
  background:rgba(2, 2,2, 0.75);
}
.ch_inner{
   margin:50% 5% 0 5%;height:30%;

}
.channel h4{ font-size: 12px;}
.clockbox{text-align: center}
.clockbox img{width: 40px; margin:0 2px;box-shadow:0 0 10px #fff}
</style>











