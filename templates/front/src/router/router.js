import VueRouter from 'vue-router'

//引入组件
import Index from '../pages'
import Home from '../pages/home/home'
import Login from '../pages/login/login'
import Register from '../pages/register/register'
import Center from '../pages/center/center'
import Storeup from '../pages/storeup/list'
import News from '../pages/news/news-list'
import NewsDetail from '../pages/news/news-detail'
import payList from '../pages/pay'

import chezhuList from '../pages/chezhu/list'
import chezhuDetail from '../pages/chezhu/detail'
import chezhuAdd from '../pages/chezhu/add'
import cheliangxinxiList from '../pages/cheliangxinxi/list'
import cheliangxinxiDetail from '../pages/cheliangxinxi/detail'
import cheliangxinxiAdd from '../pages/cheliangxinxi/add'
import cheweileixingList from '../pages/cheweileixing/list'
import cheweileixingDetail from '../pages/cheweileixing/detail'
import cheweileixingAdd from '../pages/cheweileixing/add'
import cheweixinxiList from '../pages/cheweixinxi/list'
import cheweixinxiDetail from '../pages/cheweixinxi/detail'
import cheweixinxiAdd from '../pages/cheweixinxi/add'
import cheliangruchangList from '../pages/cheliangruchang/list'
import cheliangruchangDetail from '../pages/cheliangruchang/detail'
import cheliangruchangAdd from '../pages/cheliangruchang/add'
import cheliangchuchangList from '../pages/cheliangchuchang/list'
import cheliangchuchangDetail from '../pages/cheliangchuchang/detail'
import cheliangchuchangAdd from '../pages/cheliangchuchang/add'
import newstypeList from '../pages/newstype/list'
import newstypeDetail from '../pages/newstype/detail'
import newstypeAdd from '../pages/newstype/add'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}

//配置路由
export default new VueRouter({
	routes:[
		{
      path: '/',
      redirect: '/index/home'
    },
		{
			path: '/index',
			component: Index,
			children:[
				{
					path: 'home',
					component: Home
				},
				{
					path: 'center',
					component: Center,
				},
				{
					path: 'pay',
					component: payList,
				},
				{
					path: 'storeup',
					component: Storeup
				},
				{
					path: 'news',
					component: News
				},
				{
					path: 'newsDetail',
					component: NewsDetail
				},
				{
					path: 'chezhu',
					component: chezhuList
				},
				{
					path: 'chezhuDetail',
					component: chezhuDetail
				},
				{
					path: 'chezhuAdd',
					component: chezhuAdd
				},
				{
					path: 'cheliangxinxi',
					component: cheliangxinxiList
				},
				{
					path: 'cheliangxinxiDetail',
					component: cheliangxinxiDetail
				},
				{
					path: 'cheliangxinxiAdd',
					component: cheliangxinxiAdd
				},
				{
					path: 'cheweileixing',
					component: cheweileixingList
				},
				{
					path: 'cheweileixingDetail',
					component: cheweileixingDetail
				},
				{
					path: 'cheweileixingAdd',
					component: cheweileixingAdd
				},
				{
					path: 'cheweixinxi',
					component: cheweixinxiList
				},
				{
					path: 'cheweixinxiDetail',
					component: cheweixinxiDetail
				},
				{
					path: 'cheweixinxiAdd',
					component: cheweixinxiAdd
				},
				{
					path: 'cheliangruchang',
					component: cheliangruchangList
				},
				{
					path: 'cheliangruchangDetail',
					component: cheliangruchangDetail
				},
				{
					path: 'cheliangruchangAdd',
					component: cheliangruchangAdd
				},
				{
					path: 'cheliangchuchang',
					component: cheliangchuchangList
				},
				{
					path: 'cheliangchuchangDetail',
					component: cheliangchuchangDetail
				},
				{
					path: 'cheliangchuchangAdd',
					component: cheliangchuchangAdd
				},
				{
					path: 'newstype',
					component: newstypeList
				},
				{
					path: 'newstypeDetail',
					component: newstypeDetail
				},
				{
					path: 'newstypeAdd',
					component: newstypeAdd
				},
			]
		},
		{
			path: '/login',
			component: Login
		},
		{
			path: '/register',
			component: Register
		},
	]
})
