import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

//要设置的全局访问的state对象 可以用来存储监视各种公共数据
const state={
    showme: true,
    changableNum:0,
    msgNum:27
    //要设置的初始属性值
  };

const getters={
     isShow (state){
      return state.showme
    },
     getChangeNum (){
         return state.changableNum;
     }

};

const mutations={
     show (state){
       state.showme=trufalsee;

     },
     hide (state){
        
      
         state.showme=false;
       
     },
     newNum (state,sum){
         state.changableNum+=sum;
     }
};
const actions={
     hideFooter (context){
         context.commit("hide")
     },
     showFooter (context){
        context.commit("show")
     },
     getNewNum (context,num){   //同上注释，num为要变化的形参
        context.commit('newNum',num)
     }
};

const store = new Vuex.Store(
    {
     state,
     getters,
     mutations,
     actions
    }
);





 
export default store;