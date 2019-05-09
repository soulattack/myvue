# mytest

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

页面总体说明 
该demo为参考学习型 主要依靠vue-cli,vue-router,vue-resource,vuex等常用组合（鉴于vue-resource官方不再更新 以后会使用axios替换）。 
后台数据来源 为php页面发送的json格式信息 ，其中新闻消息页面 已在后台做了全局使用处理 前端可以使用vue-resource直接获取，不必再做跨域处理。
本地static中的静态文件 为追求效率 以本地形式存放，json必须做jsonp处理 否则 打包后无法直接请求到本地json。
vuex 目前的公共数据为 底部菜单的显示隐藏状态 ，演示实例：当点击时钟按钮触发事件 调用全屏时钟页面时候 监听底部菜单状态状态 隐藏底部菜单。
底部菜单的消息数量通知 使用的是bus.js作为中间媒介传递消息个数 仅做前期学习参考及演示，实际使用推荐vuex来管理数据

部分列表页面使用betterscroll插件 实现了弹性效果，但该插件据说很久未更新存在一些bug 网上的解决方式并非100%有效 比如数据加载 dom渲染 和betterscroll初始化未执行 可能导致第一次进入的时候 没有弹性效果。 
list页面使用的是vue-scroll 弹性效果稍微好些 并有加载数据的模拟操作 实现方法由切割数组模拟 实际操作可直接向后端请求数据。
####  219-04-01 页面问题tips 之前在制作城市列表页面字母导航栏的时候遇到过js变量无法正常获取的问题。多方查找求教 审查元素发现莫名出现的空格字符导致，trim()后基本正常了，但奇怪的是几天后 我试着把trim（）删除，重新刷新代码 清空缓存 甚至更新测试用json数据后却正常了，希望有大神能解释下。


######  2019-03-01 change  user.vue userlist refresh 
######  2019-03-02  新增list.vue组件 加载新的数据列表 采用的vue-scroller插件，目前滑动加载还存在有bug，现在使用的是手动点击加载的方式s
