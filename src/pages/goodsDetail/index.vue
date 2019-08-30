<template>
	<div class="goods_detail_box">
		<!--banner-->		
		<div class="" style="position: relative;">
			<div class="" style="position: absolute;top: 10px;left: 10px;z-index: 10;" @click="ret">
				<!-- <x-icon type="ios-arrow-thin-left" size="30"></x-icon> -->
				<van-icon name="arrow-left" :size="20"/>
			</div>
		   <!-- <swiper :list="goodsimg" :style = "{height:imgheight,width:imgwidth}" dots-position="center" auto loop v-if="goodsimg.length > 0"></swiper>	 -->
		   <van-swipe :autoplay="3000" :height="200">
				<van-swipe-item v-for="(image, index) in goodsimg" :key="index">
					<img v-lazy="image.img" style="height:100%;width:100%;"/>
				</van-swipe-item>
			</van-swipe>			
		</div>

        <div class="detail_containt">
			<p class="detail_containt_title">{{title}}</p>
			<p class="detail_containt_detail">{{detail}}</p>
			<div class="detail_containt_box">
				<div class="detail_containt_price">
					￥ <span> {{price}} </span> /份
				</div>					
				<div class="detail_containt_residue">
					剩余：<span>{{sy}}</span>份
				</div>
			</div>
			
			<div class="weui-cells detail_containt_item">
	          <div class="weui-cell">
	            <div class="weui-cell__bd has_carts_count detail_containt_item_count">
		             <!-- <x-number title = "数量" :value = "csnum" :min="min" :max ='max' @on-change="change"></x-number> -->
					 <label style="position: relative;top: 6px;">数量：</label><van-stepper v-model="csnum" :min="min" :max ='max' @change="change" style="display:inline;"/>
	            </div>	           
	          </div>		         	
	        </div>	       
		</div>
		<!-- <div v-for="(src,index) in list" style="background-color:#eee;text-align:center;" :key="index">
	      <span style="font-size:20px;"><inline-loading></inline-loading></span>
	      <x-img :src="src" :webp-src="`${src}?type=webp`" @on-success="success" class="ximg-demo" :offset="-100" container="#vux_view_box_body"></x-img>
	   </div> -->
	    <div class="imgbox">
             <img v-for="(src,index) in list" v-lazy="src" :key="index" lazyComponent="true">
		</div>
		  

	    <totop></totop>
	</div>
</template>

<script>
    import Vue from 'vue';
	import { Swipe, SwipeItem,lazyload,Icon,Stepper} from 'vant';
    import totop from '@/components/shop/totop.vue';
    
    import { getGoodsDetailInfo } from '@/api/goodsDetail'
	
	Vue.use(Swipe).use(SwipeItem).use(lazyload).use(Icon).use(Stepper);
	export default {
		components:{
			
			totop
		},
		data(){
			return {
				goodsimg:[],
				list: [],
				imgheight:'auto',
				imgwidth:'auto',
				min:1,
				max:10,
                title:'',
                detail:'',
                price:0,
                sy:0,
                csnum:0
			}
		},
		methods:{
			success (src, ele) {
		      console.log('success load', src,)
		      const span = ele.parentNode.querySelector('span');
		      ele.parentNode.removeChild(span)
		   },
		   ret(){
		   	this.$router.go(-1)
		   },
		   change(val){
		   	var self = this;	
		   }
		},
		mounted(){		
			$(window).scrollTop(0);
			let w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
            this.imgwidth = w+'px';
            this.imgheight = w+'px';
            let self = this;

            getGoodsDetailInfo().then(response => {
                console.log(response)
                response.data.img_lb.forEach((item,index) => {
					let obj = {};
					obj.url = item.url === ''?'javascript:':item.url;
					obj.img = require("../../assets/images/"+item.img);
					self.goodsimg.push(obj);
                });
                self.title = response.data.title;
                self.detail = response.data.detail;
                self.price = response.data.price;
                self.sy = response.data.sy;
                self.min = response.data.nummin;
                self.max = response.data.nummax;
                self.csnum = response.data.csnum;
                response.data.layimgbox.forEach((item,index) => {
					let img;				
                    img = require("../../assets/images/"+item);
                    console.log(img)
					self.list.push(img);
                });
            })
		} 
	}
</script>

<style>
	.goods_detail_box{
		/* margin-bottom: 50px; */
	}
	.goods_detail_box .vux-slider > .vux-swiper{
		height: auto !important;
	}
	.goods_detail_box .vux-slider > .vux-swiper{
		position: static;
		background-color: #fff;
	}
	.goods_detail_box .vux-slider > .vux-swiper > .vux-swiper-item > a > .vux-swiper-desc{
		display: none;
	}
	
	.detail_containt {
	    background-color: #fff;
	    padding: 0 0.7rem;
	    margin-bottom: 15px;
	}
	.detail_containt .detail_containt_title {
	    margin-bottom: 5px;
	    font-size: 16px;
	    overflow: hidden;
	    text-overflow: ellipsis;
	    display: -webkit-box;
	    -webkit-box-orient: vertical;
	    -webkit-line-clamp: 1;
	}
	.detail_containt .detail_containt_detail {
	    color: #999;
	    font-size: 14px;
	    margin-bottom: 7px;
	    overflow: hidden;
	    text-overflow: ellipsis;
	    display: -webkit-box;
	    -webkit-box-orient: vertical;
	    -webkit-line-clamp: 2;
	}
	.detail_containt_box {
	    width: 100%;
	    height: 40px;
	    line-height: 40px;
	    position: relative;
	}
	.detail_containt_box:after, .detail_containt_box:before {
	    clear: both;
	    content: ' ';
	    display: block;
	}
	.detail_containt_box .detail_containt_price {
	    color: #ce1419;
	    font-weight: 600;
	    float: left;
	}
	.detail_containt_box .detail_containt_residue {
	    float: right;
	    color: #666;
	}
	.ximg-demo {
  width: 100%;
  height: auto;
  display: block;
}
.ximg-error {
  background-color: #fff;
}
.ximg-error:after {
  content: '加载失败';
  color: red;
}

.imgbox{
	width: 100%;
}
.imgbox img{
	width: 100%;
	height: auto;
	display: block;
}
</style>