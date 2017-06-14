<template>
  <div id="app">
     <!---->
	 <transition name="fade"  mode="out-in">
			<router-view></router-view>
	 </transition>
	 
  </div>
</template>

<script>

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
   methods:{
	  	test(){
		//		Toast({
		//		  message: '提示',
		//		  position: 'center',
		//		  duration: 5000
		//		});
		//		Indicator.open({
		//		  text: '加载中...',
		//		  spinnerType: 'fading-circle'
		//		});	
				

				MessageBox.confirm('确定执行此操作?').then((action) => {
					 alert('22')
				},function(){
					alert('取消')
				})
//				this.$http.post("http://192.168.82.119:9090/artup-build-admin/builder/admin/cors/login.do?format=json&username=admin11&password=123456&sessionId=3666a395ea96456dbded009fd14da1a8").then((res)=>{
//					console.log(res)
//				})
		  }
//		  handleChange(index) {
//				
//		  },
//		  result1(ret) {
//              this.model1 = ret.provance + ' ' + ret.city + ' ' + ret.area;
//          }
  }
}
</script>

<style lang="less">
@import './assets/less/style.less';
h1, h2 {
  font-weight: normal;
}
*{margin: 0;padding: 0;}
li{list-style: none;}
#app {
	 font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;				
}	
/*切换路由的动画*/
.fade-enter-active,
.fade-leave-active {
	transition: all .2s ease;
}

.fade-enter,
.fade-leave-active {
	opacity: 0;
}



/*ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}*/

</style>
