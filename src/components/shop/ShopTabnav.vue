<template>
	<div class="" id="shop_index">      
		<!-- <tabbar>
	       <tabbar-item v-for = '(item,index) in bottomBar' :link='item.link' :selected='item.isselected' :key="index">
	        <span slot="icon" class="tabbar_img" :class="item.iconCls"></span>
	        <span slot="label">{{item.name}}</span>
	      </tabbar-item>
	     
	    </tabbar> -->
		<van-tabbar route>
  <van-tabbar-item
    replace
	v-for = '(item,index) in bottomBar' :to='item.link' :icon = "item.iconCls" :key="index"
  >
    {{item.name}}
  </van-tabbar-item>

</van-tabbar>
	</div>
</template>

<script>
	import Vue from 'vue';
	import { Tabbar, TabbarItem } from 'vant';

	Vue.use(Tabbar).use(TabbarItem);
	
	export default {
		components: {
		   
		},
      data(){
      	return {
      		bottomBar: [
				{
					name: '首页',
					iconCls: 'shop',//require('@/assets/images/tabbar_img_home.png')
					link: '/home',
					isselected:true
				},
				{
					name: '商城',
					iconCls: 'bag',
					link: '/goods',
					isselected:false
				},
				{
					name: '购物车',
					iconCls: 'shopping-cart',
					link: '/cart',
					isselected:false
				},
				{
					name: '我的',
					iconCls: 'manager',
					link: '/self',
					isselected:false
				}
			]
      	}
      },
	  mounted(){
	  	   let self = this;
	  	   let currentRoute = self.$route.path; 
	  	    
		   self.bottomBar.forEach(function(i){
		   	  i.isselected = false;
		   	  if(i.link == currentRoute){
		   	  	i.isselected = true;
		   	  }
		   })
		}	  
	}
</script>

<style scoped>
	.weui-tabbar{
		position: fixed !important;
		left: 0;
	}
	.tabbar_img{
		background-repeat: no-repeat;
		background-position-x: 4px;
		background-position-y: center;
		width: 100%;
		height: 100%;
		overflow: hidden;
		display: block;
	}
	#shop_index{
		height: 53px;
		position: fixed;
		bottom: 0;
	}
	.tabbar_img.tabbar_img_home{
		background-image: url(../../assets/images/home.png);
	}
	.tabbar_img.tabbar_img_ry{
		background-image: url(../../assets/images/ry.png);
	}
	.tabbar_img.tabbar_img_shop{
		background-image: url(../../assets/images/shop.png);
	}
	.tabbar_img.tabbar_img_car{
		background-image: url(../../assets/images/car.png);
	}
	.tabbar_img.tabbar_img_self{
		background-image: url(../../assets/images/self.png);
	}
    .weui-bar__item_on .tabbar_img{
		/*background: url(img/home.png) no-repeat -41px center;*/
		background-position-x: -40px;
	}
</style>