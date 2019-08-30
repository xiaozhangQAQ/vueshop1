<template>
	<div class="shop_box">
		<div class="my-serve">
            <van-search placeholder="请输入搜索关键词"/>
		</div>		
	    <div class="" style="padding-top: 45px;">	    	
	    <!--轮播图-->
		<div class="shop_banner">
			<!-- <swiper loop :list="demo06_list" dots-position="center" v-if="demo06_list.length > 0"></swiper>	 -->
			<van-swipe :autoplay="3000" :height="200">
				<van-swipe-item v-for="(image, index) in demo06_list" :key="index">
					<img v-lazy="image.img" class="vant-img"/>
				</van-swipe-item>
			</van-swipe>
		</div>	
		
		<!-- 推荐认养
       <div class="shop_pro">
       	    <div class="shop_pro_title">
       	    	<h4> 推荐认养 <span> RECOMMEND </span></h4>
       	    </div>
       	    <fosterItem :pd_p = 'pd' v-for="n in 3"></fosterItem>	           	    	           	    
       </div> -->
	           	           
	    <!--  精品商城         -->
	        <div class="shop_pro">
           	    <div class="shop_pro_title">
           	    	<h4> 精品商城 <span> BOUTIQUE </span></h4>
           	    </div> 
           	    <div class="">
           	    	<shopList></shopList>
           	    </div>
           	    
	        </div>
	        
	        <!--  新闻资讯         -->
	        <div class="shop_pro">
           	    <div class="shop_pro_title" @click="send">
           	    	<h4> 新闻资讯 <span> NEWS </span></h4>
           	    </div>
           	    <news></news>     
	        </div>
       </div>
       <totop></totop>
       <ShopTabnav></ShopTabnav>
	</div>
</template>

<script>
    import Vue from 'vue';
	import { Swipe, SwipeItem,lazyload,Search } from 'vant';
	import tabnav from '@/components/shop/ShopTabnav.vue';
	import fosterItem from '@/components/shop/fosterItem.vue';
	import shopList from './shop/shopList.vue';
	import totop from '@/components/shop/totop.vue';
	import ShopTabnav from '@/components/shop/ShopTabnav.vue';
	import news from './news/news.vue';
	
	// import { ajaxGetAsync } from '@/util/ajaxAsync'
	import { getRb } from '@/api/home'
	Vue.use(Swipe).use(SwipeItem).use(lazyload).use(Search);
	
	export default {
		name:'home',
		components:{
			fosterItem,
			shopList,
			tabnav,
			totop,
			ShopTabnav,
			news
		},
		data(){
			return {
				demo06_list:[],
				 newsList:[
				   {news_title:'教你四招健康吃鸡肉',news_imgsrc:require('@/assets/images/news1.png'),news_detail:'自由散养，成就非凡品质啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊sadfgasd',news_date:1},
				   {news_title:'鸡蛋怎么做最营养',news_imgsrc:require('@/assets/images/news2.png'),news_detail:'自由散养，成就非凡品质',news_date:2},
				   {news_title:'鸡蛋怎么做好吃',news_imgsrc:require('@/assets/images/news3.png'),news_detail:'自由散养，成就非凡品质',news_date:3}
				 ],
				 transitionName: 'slide-right',
				 noData: '',
				 datashow:{}
			}
		},
		methods:{
			toProDetail:function(){

			},
			send(){
				
			}
		},
		mounted(){
			var self = this;      
			
			getRb({aa:'aa'}).then(response => {
              response.data.forEach((item,index) => {
					let obj = {};
					obj.url = item.url === ''?'javascript:':item.url;
					obj.img = require("../../assets/images/"+item.imgsrc);
					self.demo06_list.push(obj);
			  });
            })
			
		}
	}
</script>

<style scoped>
	.pro_box{
		display: -webkit-box;
	    display: -ms-flexbox;
	    display: flex;
	    -webkit-box-align: center;
	    -ms-flex-align: center;
	    align-items: center;
	    width: 100%;
	}
	.shop_box{
		/*background-color: #fff;*/
		position: absolute;
		top: 0;
		width: 100%;
		bottom: 50px;
		overflow: auto;
		left: 0;
	}
	.shop_banner{
		padding: 10px;
		background-color: #fff;
		margin-bottom: 20px;
	}
	.shop_banner .vux-swiper{
		height: 127px !important;
		border-radius: 8px;
	}
	.vux-slider > .vux-swiper > .vux-swiper-item > a > .vux-swiper-desc{
		display: none;
	}
	.shop_box .vux-slider > .vux-indicator,.shop_box .vux-slider .vux-indicator-right{
		right:0px;
		left: 40%;
	}
	.shop_banner .vux-slider > .vux-indicator > a > .vux-icon-dot, .vux-slider .vux-indicator-right > a > .vux-icon-dot{
		width: 8px;
		height: 8px;
		background-color: #999;
	}
	.shop_banner .vux-slider > .vux-indicator > a > .vux-icon-dot.active, .vux-slider .vux-indicator-right > a > .vux-icon-dot.active{
		background-color: #fff;
	}
	
	.shop_pro_title{
		margin: 10px 0px;
	}
	.shop_pro {
	    width: 100%;
	    background-color: #fff;
	    padding-top: 10px;
	    margin-bottom: 15px;
	}
	.shop_pro h4 {
	    text-align: center;
	    color: #333;
	    position: relative;
	}
	.shop_pro h4:before {
	    content: '';
	    position: absolute;
	    top: 43%;
	    background: #494949;
	    width: 9%;
	    height: 2px;
	    left: 55px;
	}
	.shop_pro h4 span {
	    color: #00b260;
	}
	.shop_pro h4:after {
	    content: '';
	    position: absolute;
	    top: 43%;
	    background: #00b260;
	    width: 9%;
	    height: 2px;
	    right: 55px;
	}
	.weui-cell__hd img {
	    display: block;
	    margin-right: 5px;
	}
	.shop_pro_leftImg img {
	    width: 110px;
	    height: 110px;
	}
	.shop_pro_item_title {
	    margin-bottom: 7px;
	    font-size: 16px;
	    overflow: hidden;
	    text-overflow: ellipsis;
	    display: -webkit-box;
	    -webkit-box-orient: vertical;
	    -webkit-line-clamp: 1;
	}
	.shop_pro_item_detail {
	    color: #999;
	    font-size: 12px;
	    margin-bottom: 7px;
	    overflow: hidden;
	    text-overflow: ellipsis;
	    display: -webkit-box;
	    -webkit-box-orient: vertical;
	    -webkit-line-clamp: 2;
	}
	.shop_pro_item_progress{
		display: -webkit-box;
	    display: -webkit-flex;
	    display: flex;
	    -webkit-box-align: center;
	    -webkit-align-items: center;
	    align-items: center;
	    margin-bottom: 7px;
	}
	.shop_pro_item_bar{
		 background-color: #ebebeb;
    height: 3px;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 1;
	}
	.js_progress{
		width: 0;
	    height: 100%;
	    background-color: #09bb07;
	}   
	.shop_pro_item_progress .weui-progress__opr {
	    font-size: 14px;
	    color: #00b260;
	    display: block;
	    margin-left: 15px;
	}
	
	.shop_pro_item_price .shop_pro_item_price_info {
	    border-right: 1px solid #e1e1e1;
	    /* border: none; */
	    margin-left: 10px;
	}
	.shop_pro_item_price .shop_pro_item_price_info:last-child {
	    border: none;
	}
	.shop_pro_item_price p {
	    color: #999;
	    font-size: 12px;
	    margin-bottom: 3px;
	}
	.shop_pro_item_price .shop_pro_price_money {
	    color: #e30000;
	    font-size: 14px;
	}
	.weui-search-bar__box .weui-icon-search{
		top: 50%;
	}

	.vant-img{
		width: 100%;
		height: 100%;
	}
	.my-serve{
		position: fixed;
		width: 100%;
		height: 55px;
		top: 0;
		left: 0;
		z-index: 10;
	}
</style>	
