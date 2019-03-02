import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/components/HelloWorld'
import Index from '@/components/Index'
import News from '@/components/News'
import NewsInfo from '@/components/NewsInfo'
import List from '@/components/List'
import User from '@/components/User'
import City from '@/components/City'

import ComList from '@/components/comList'
import BankList from '@/components/banksList'

import Ch01 from '@/components/channel/channel01.vue'
import Clock from '@/components/channel/channelClock.vue'
//import bd from '@/components/index/Swiper.vue'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
	  {
      path: '/news',
      name: 'News',
      component: News
    },
    {
      path: '/comlist',
      name: 'comlist',
      component: ComList
    },
    {
      path: '/list',
      name: 'list',
      component: List
    },
    {
      path: '/banklist',
      name: 'banklist',
      component: BankList
    },
	  {
      path: '/newsinfo/:id',
      name: 'NewsInfo',
      component: NewsInfo
    },
		  {
      path: '/index',
      name: 'Index',
      component: Index,
	    children:[ 
	       { path:'/ch01', component:Ch01 },
	       { path:'/clock', component:Clock }
		
		]
    },
	   {
      path: '/user',
      name: 'User',
      component: User
    },
    {
      path: '/city',
      name: 'City',
      component: City
    }
  ]
})
