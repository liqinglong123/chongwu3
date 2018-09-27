import Vue from 'vue'
import app from './app.vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueLazyload from 'vue-lazyload'
// 移动端touch事件
// https://github.com/vuejs/vue-touch/tree/next
import VueTouch from 'vue-touch'
Vue.use(VueTouch, { name: 'v-touch' });
// 懒加载配置 https://www.cnblogs.com/xyyt/p/7650539.html
Vue.use(VueLazyload, {
    preLoad: 1.3,//预加载高度比例
    loading: '../assets/12345.gif',//预加载图片
    attempt: 3 //尝试加载图片数量
});
// 安装请求插件
Vue.use(VueAxios, axios);
Vue.use(VueRouter);
const routes = [
    {
      path: '/index',
      "name": "首页",
      component: require("./views/index/index.vue").default,
      children:[{
        path: '/index/erji',
        "name": "首页二级",
        component: require("./views/index/erji/index.vue").default,
        children:[{
          path: '/index/erji/sanji',
          "name": "首页三级",
          component: require("./views/index/erji/sanji/index.vue").default,
        }]
      }]
    },
    {
      path: '/xinxianshi',
      "name": "新鲜事",
      component: require("./views/xinxianshi/index.vue").default,
      children:[{
        path: '/xinxianshi/erji',
        "name": "新鲜事二级",
        component: require("./views/xinxianshi/erji/index.vue").default,
        children:[{
          path: '/xinxianshi/erji/sanji',
          "name": "新鲜事三级",
          component: require("./views/xinxianshi/erji/sanji/index.vue").default,
        }]
      }]
    },
    {
      path: '/zhangzhishi',
      "name": "长知识",
      component: require("./views/zhangzhishi/index.vue").default,
      children:[{
        path: '/zhangzhishi/erji',
        "name": "长知识二级",
        component: require("./views/zhangzhishi/erji/index.vue").default,
        children:[{
          path: '/zhangzhishi/erji/sanji',
          "name": "长知识三级",
          component: require("./views/zhangzhishi/erji/sanji/index.vue").default,
        }]
      }]
    },
    {
      path: '/kantuya',
      "name": "看涂鸦",
      component: require("./views/kantuya/index.vue").default,
      children:[{
        path: '/kantuya/erji',
        "name": "看涂鸦二级",
        component: require("./views/kantuya/erji/index.vue").default,
        children:[{
          path: '/kantuya/erji/sanji',
          "name": "看涂鸦三级",
          component: require("./views/kantuya/erji/sanji/index.vue").default,
        }]
      }]
    },
    {
      path: '/mengzhuanti',
      "name": "萌专题",
      component: require("./views/mengzhuanti/index.vue").default,
      children:[{
        path: '/mengzhuanti/erji',
        "name": "萌专题二级",
        component: require("./views/mengzhuanti/erji/index.vue").default,
        children:[{
          path: '/mengzhuanti/erji/sanji',
          "name": "萌专题三级",
          component: require("./views/mengzhuanti/erji/sanji/index.vue").default,
        }]
      }]
    },
    {
      path: '/baike',
      "name": "百科",
      component: require("./views/baike/index.vue").default,
      children:[{
        path: '/baike/erji',
        "name": "百科二级",
        component: require("./views/baike/erji/index.vue").default,
        children:[{
          path: '/baike/erji/sanji',
          "name": "百科三级",
          component: require("./views/baike/erji/sanji/index.vue").default,
        }]
      }]
    },
    {
      path: '/wenda',
      "name": "问答",
      component: require("./views/wenda/index.vue").default,
      children:[{
        path: '/wenda/erji',
        "name": "问答二级",
        component: require("./views/wenda/erji/index.vue").default,
        children:[{
          path: '/wenda/erji/sanji',
          "name": "问答三级",
          component: require("./views/wenda/erji/sanji/index.vue").default,
        }]
      }]
    },
    {
      path: '/huati',
      "name": "话题",
      component: require("./views/huati/index.vue").default,
      children:[{
        path: '/huati/erji',
        "name": "话题二级",
        component: require("./views/huati/erji/index.vue").default,
        children:[{
          path: '/huati/erji/sanji',
          "name": "话题三级",
          component: require("./views/huati/erji/sanji/index.vue").default,
        }]
      }]
    },
    {
      path: '/meirong',
      "name": "美容",
      component: require("./views/meirong/index.vue").default,
      children:[{
        path: '/meirong/erji',
        "name": "美容二级",
        component: require("./views/huati/erji/index.vue").default,
        children:[{
          path: '/meirong/erji/sanji',
          "name": "美容三级",
          component: require("./views/meirong/erji/sanji/index.vue").default,
        }]
      }]
    },
    {
      path: '/yiyuan',
      "name": "医院",
      component: require("./views/yiyuan/index.vue").default,
      children:[{
        path: '/yiyuan/erji',
        "name": "医院二级",
        component: require("./views/yiyuan/erji/index.vue").default,
        children:[{
          path: '/yiyuan/erji/sanji',
          "name": "医院三级",
          component: require("./views/yiyuan/erji/sanji/index.vue").default,
        }]
      }]
    },
    {
      path: '/dianpu',
      "name": "店铺",
      component: require("./views/dianpu/index.vue").default,
      children:[{
        path: '/dianpu/erji',
        "name": "店铺二级",
        component: require("./views/dianpu/erji/index.vue").default,
        children:[{
          path: '/dianpu/erji/sanji',
          "name": "店铺三级",
          component: require("./views/dianpu/erji/sanji/index.vue").default,
        }]
      }]
    },
    {
      path: '/sheying',
      "name": "摄影",
      component: require("./views/sheying/index.vue").default,
      children:[{
        path: '/sheying/erji',
        "name": "摄影二级",
        component: require("./views/sheying/erji/index.vue").default,
        children:[{
          path: '/sheying/erji/sanji',
          "name": "摄影三级",
          component: require("./views/sheying/erji/sanji/index.vue").default,
        }]
      }]
    },
    {
      path: '/shuizu',
      "name": "水族",
      component: require("./views/shuizu/index.vue").default,
      children:[{
        path: '/shuizu/erji',
        "name": "水族二级",
        component: require("./views/shuizu/erji/index.vue").default,
        children:[{
          path: '/shuizu/erji/sanji',
          "name": "水族三级",
          component: require("./views/shuizu/erji/sanji/index.vue").default,
        }]
      }]
    },
    {
      path: '/maoshe',
      "name": "猫舍",
      component: require("./views/maoshe/index.vue").default ,
      children:[{
        path: '/maoshe/erji',
        "name": "猫舍二级",
        component: require("./views/maoshe/erji/index.vue").default,
        children:[{
          path: '/maoshe/erji/sanji',
          "name": "猫舍三级",
          component: require("./views/maoshe/erji/sanji/index.vue").default,
        }]
      }]
    },
    {
      path: '/quanshe',
      "name": "犬舍",
      component: require("./views/quanshe/index.vue").default,
      children:[{
        path: '/quanshe/erji',
        "name": "犬舍二级",
        component: require("./views/quanshe/erji/index.vue").default,
        children:[{
          path: '/quanshe/erji/sanji',
          "name": "犬舍三级",
          component: require("./views/quanshe/erji/sanji/index.vue").default,
        }]
      }]
    },
    {
      path: '/qita',
      "name": "其他",
      component: require("./views/qita/index.vue").default,
      children:[{
        path: '/qita/erji',
        "name": "其他二级",
        component: require("./views/qita/erji/index.vue").default,
        children:[{
          path: '/qita/erji/sanji',
          "name": "其他三级",
          component: require("./views/qita/erji/sanji/index.vue").default,
        }]
      }]
    },
    { path: '*', redirect: '/index' }
]

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
    routes // （缩写）相当于 routes: routes
})
new Vue({
    el: '#app',
    router,
    render: h => h(app)
})
