<template>
  <div class="indexcom">
   
    <ul class="">
      <li v-for="item in comlist" :key="item.id">
        <dl>
          <dt>
             <div class="i_tleimg"><img :src="imgpath+item.img" alt=""> </div> 
             <span class="i_title txtoverflow"> {{item.title}} </span>
          </dt>
          <dd></dd>
        </dl>
     
      </li>
    </ul>
   
   
  </div>
</template>

<script>
export default {
  name: 'indexcom',
  data:function () {
    return {
      msg: 'indennav',
      imgpath:"http://192.168.1.104/aj/images/com/",
      comlist:[]
    }
  },
  //props:['newsnums'],
  methods:{
    getcomlist (){
        const dataurl="http://192.168.1.104/aj/items.php";
          this.$http.get(dataurl).then( res =>{
          //this.comlist=res.body.slice(0,2);
          this.comlist=res.body;
          console.log(this.comlist);

        })
    }
  },
  created: function(){

    this.getcomlist();
  }

}
	 
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
