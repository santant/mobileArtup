//import Home from './components/Home.vue'
import Login from './components/Login.vue'
//import orderList from './components/Table.vue'

//
////导出路由
export default{
	routes:[
	 	{ 
	 		path: '/', component: Login	 		
	 	}
//		{
//			path:'/', component:Home, //首页 home
//			children: [
//	            { path: '/orderList', component: orderList }
////	            { path: '/page5', component: Page5, name: '页面5' }
//     		 ]
//		},
//		{
//			path:'/Login', component:Login //登录
//		}
	]
}
