<template>
  <div class="pullListbox">
    <div class="pl-tle">{{ msg }}--{{listnum}}</div>
    <!-- <scroller  :on-infinite="infinite"  :on-refresh = "refresh"  ref="my_scroller"> -->
    <scroller  ref="my_scroller">
    <ul class="artlist">
      <li v-for="item in list" :key="item.id">{{item.title}}</li>
       <p class="addmore" red="addmore" @click="addmore" ref="tips">加载更多</p>
    </ul>
   </scroller>
   
  </div>
</template>

<script>
import Vue from 'vue'
import vueScroll from 'vue-scroller'
Vue.use(vueScroll)

export default {
  name: 'list',
  data:function () {
    return {
      msg: 'LIST',
      list:{},
      listnum:0,
      initmsg:0,
      initcount:5
    }
  },
  methods:{
      // infinite () {
      //   console.log("xiala");
      //}
      getdata  (count){
          var url="http://192.168.1.104/aj/art.php";
          this.$http.get(url).then( res => {
                this.listnum=res.body.length;     
              //  this.list=res.body.slice(0,10);
              this.list=res.body.slice(0,count);
         

          })
      },
      initdata (){
         this.getdata(this.initcount);
          //   this.getdata();

      },

     infinite:function(){
         console.log('下拉操作'+this.listnum+"--"+this.initcount+"--"+this.list.length)
         this.timeout = setTimeout(()=>{
         if (this.list.length >=5) {
             console.log("yess");
              this.$refs.my_scroller.finishInfinite(true);
            }else{
                console.log("nooo");
              this.$refs.my_scroller.finishInfinite(false);
          }    
          //this.list.push(this.myData[1]);
         // this.getdata(this.initcount+5);
       }, 2500)
     }, 
     /***   点击动作 触发加载更多 * */
    addmore (){
	   
	       // console.log(this.pagecount);
	        this.getdata(this.initcount+5);
			this.initcount=this.initcount+5;
	      //  console.log(this.pagecount);
		  if(this.initcount>=this.listnum){
		   // this.$refs.tips.innerHtml="没有更多了";
		    console.log(this.$refs.tips);
		    this.$refs.tips.innerHTML="没有更多数据了";
		  }
	   },
    refresh:function(){
      console.log('refresh')
      this.timeout = setTimeout(()=>{
        this.$refs.my_scroller.finishPullToRefresh()
      }, 1500)
    }



  },

  mounted:function(){
     //this.getdata();
     this.initdata();

  }

}
	 
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
   
</style>
      