<template>
  <div class="city" id="city"  ref="wrappcity">
    <div>
    
     <ul class="citylist">
       <li v-for="(item,key) in cities" :key="key"  :ref="item.title">
           <dl>
             <dt>{{item.title}}</dt>
             <!-- <dd v-for="(subitem, i) in item" :key="i">
                <b v-for="(tits,iss) in subitem" :key="iss">{{tits}}</b>
             </dd> -->
              <dd v-for="(subitem, i) in item.lists" :key="i">
                <span>{{subitem}}</span>
             </dd>
           </dl>
               <!-- <span>{{item.lists}}</span> -->
               <span></span>
       </li>      
     </ul>
     <!-- <div class="ms"></div> -->

   </div>
   <div class="letterSidelist">
           <i v-for="(item,i) in cities" :key="item.title" :value="i" :ref="i"
            @click="movetoarea($event)"
            
            @touchstart="handtouchstart($event)" 
            @touchmove="handtouchmove($event)" 
            @touchend="handtouchend($event)" 
            >{{item.title}}</i>
         
    </div> 
    <div class="searchbox"><i class="mui-icon mui-icon-back"></i> <input type="text" id="searchtxt" v-model="sckeyword"> </div>
   
  </div>
</template>

<script>
import btScroll from 'better-scroll'
export default {
  name: 'city',
  data:function () {
    return {
      cities:{},
      lettersArr:[],
      sckeyword:''
    
    }
  },
  methods:{
     getcity () {
       var cityurl='/static/json/cities.json';
      // alert(cityurl)
       this.$http.get(cityurl).then((res)=>{
             
           var cities=res.data;
            console.log(cities.city);
           this.cities=cities.city;
           
           var arr=[];
           for (let i in this.cities) {
               arr.push( this.cities[i].title); //属性
           }
           console.log(arr);
           this.lettersArr=arr;
           setTimeout(() => {
            //this._initScroll()
                      this.scroll = new btScroll(this.$refs.wrappcity, {  click: true     });
                    
               
           }, 500);
        //   this.$nextTick(() => {
             //this.scroll = new btScroll(this.$refs.wrappcity, {click: true})
              //if (!this.scroll) {
                    //this.scroll = new btScroll(this.$refs.wrappcity, {
                    //  click: true
                   // });
                  // } else {
                  //   this.scroll.refresh();
                  // };
        
        // })
       })
     },
     movetoarea (ev){
       //console.log(ev.target.innerHTML);
        var letter=ev.target.innerHTML;
         // letter=letter.replace(/\s+/g,"");
         //   var letter='A';
          
            // letter=letter.toString();
           
             //console.log(this.$refs.listGroup[0]);
           //const area=this.$refs;

         // var area=this.$refs[letter.trim()][0];
          var area=this.$refs[letter][0];

        console.log(area);

       //  const area=this.$refs.listGroup[letter];
      
      
        //console.log(this.innerHTML)
           //console.log( this.$refs);
       //alert("sa");
       // var toarea=this.$refs[this]
      this.scroll.scrollToElement(area);
     },
     handtouchstart (ev) {
           //  console.log(ev);
           //  console.log("start");
     },
     handtouchmove (ev) {
           console.log("move");
          // console.log(ev.target.innerHTML);
               let touchMove = ev.touches[0].pageY;
               const topY=this.$refs["0"][0].offsetTop;
               const iH=this.$refs["0"][0].offsetHeight;
              console.log("元素高度："+iH);
               console.log("A"+topY);
              console.log("手指移动："+touchMove);
             //   console.log("A"+topY);
            var dis=touchMove-topY-40;                      //40 字母导航顶部距离页面顶部实际距离
              console.log("差值"+dis);
            var iindex=Math.floor((dis)/iH);
         // iindex=iindex.trim();
            console.log("序列号"+iindex);
            console.log("序列字母"+this.lettersArr[iindex]);
            //console.log("---"+this.lettersArr[iindex]);
            //  var forit=this.$refs['H'][0];
           // console.log(this.$refs);
            var iii=this.lettersArr[iindex];
            console.log("iii:"+iii);
          //var forit=this.$refs[(this.letter[iindex])][0];
           var forit=this.$refs[iii.trim()][0];
                console.log(forit);
            //  var forit=this.$refs[iindex][0];
             // 
              this.scroll.scrollToElement(forit);


     },
         handtouchend (ev) {
          //  console.log(ev);
          // console.log("end")
     },

  },
  // computed:{
  //   letters () {
  //      var letters=[];
  //       for( let i in this.cities.title){
  //              letters.push(i);
  //        }
  //       return letters;
  //   }

  // },
 created:function(){
  
        this.getcity();
     console.log("letter:"+this.letters)
  },
  mounted:function () {  
 
  //this.scroll2=new btScroll(this.$refs.wrappcity);
      //  
 
  },
  updated: function(){

   // this.scroll.refresh();
  }


}
	 
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #city{
     font-size: 12px;
         position: absolute;
    top: 0px;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
  }
  .citylist{
    position: relative;
    padding: 45px 5px 25px 5px;
    background: #f1f1f1;
  }

  .citylist li dl{}
  .citylist li dl dt{padding: 3px;}
  .citylist li dl dt b{ }
  .citylist li dl dd{background: white;}
  .citylist li dl dd span{padding: 3px 5px;display: block;border-bottom: 1px solid #eee;color:#666}

  .letterSidelist{position:fixed; top:40px; right:5px;}
  .letterSidelist i{display: block;padding: 0 2px;color:#00aced;line-height: 18px;}
  .ms{height: 0px;background: pink;}
  .searchbox{position: absolute;width: 100%;height: 40px; background: powderblue;top:0;line-height:40px ;display: none;}
   .searchbox i{padding: 8px 5px;color:white;}
   #searchtxt{width: 130px;}
</style>
