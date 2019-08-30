<template>
	<div class="totop">
		<div class="" v-if="isshow">
			<img id="totop" :src="totopimg" @click="totop" style="width: 30px;height: 30px;"/>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				totopimg:require('@/assets/images/to_top.png'),
				isshow:false
			}
		},
		mounted(){
			var self = this;
			
			window.onscroll = function() {self.scrollFunction(60)};
		
		},
		methods:{
			totop(){
				$('html,body').animate({
					scrollTop: '0px' }, 600)
			},
			scrollFunction(sTop){
				var self = this;
                if (document.body.scrollTop > sTop || document.documentElement.scrollTop > sTop) {
			        self.isshow = true;
			    } else {
			        self.isshow = false;
			    }
			}
		}
	}
</script>

<style>
	.totop{
		position: fixed;
		bottom: 63px;
		right: 20px;
		z-index: 100;
	}
</style>