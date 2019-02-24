<template>
  <div class="channel">
   <div class="ch_inner">
   
    <h2> <a @click.prevent="$router.go(-1);"><<<</a></h2>
    <h2><router-link to="/index">返回</router-link></h2>
    <h3>{{ msg }}</h3>

   
   </div>
  </div>
</template>

<script>
export default {
  name: 'channel01',
  data:function () {
    return {
      msg: '频道1',
	  list:{}
    }
  }

}
	 
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.channel{width:100%;height:100%; position:absolute;top:0;z-index:999;background:rgba(0,0,0,0.15);}
.ch_inner{
   margin:10% 5%;height:50%;background:white;
   border-radius:8px;
   border:1px solid #eee;
   box-shadow:1px 1px 6px #888 ;
}
.channel h4{}

</style>











