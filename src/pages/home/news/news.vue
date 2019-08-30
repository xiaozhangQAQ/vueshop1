<template>
	<div class="newsbox">       	    
        <group>
            <cell-box v-for = '(item,index) in newsList' :key="index">
                <div class="weui-cell__hd shop_pro_leftImg shop_pro_item_leftImg"><img :src="item.news_imgsrc"></div>
                <div class="weui-cell__bd">
                    <p class="shop_pro_item_title">{{ item.news_title }}</p>
                    <p class="shop_pro_item_detail">{{ item.news_detail }}</p>
                    <div class="weui-progress shop_pro_item_time">
                        2天前
                    </div>
                </div>   
            </cell-box>
        </group>   	                
	</div>
</template>

<script>
	import { CellBox,Group } from 'vux';   
    import { getNews } from '@/api/home'

	export default {
		name:'news',
		components:{		
            CellBox,
            Group
		},
		data(){
			return {
				 newsList:[]
			}
		},
		methods:{
			
		},
		mounted(){
			var self = this;      
			getNews({aa:'aa'}).then(response => {
                console.log(response)
              response.data.forEach((item,index) => {

					let obj = {};
					obj.news_title = item.title;
                    obj.news_imgsrc = require("../../../assets/images/"+item.imgsrc);
                    // obj.news_imgsrc = "../../assets/images/"+item.imgsrc;
                    obj.news_detail = item.detail;
					self.newsList.push(obj);
			  });
            })		
		}
	}
</script>

<style scoped>
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
</style>	
