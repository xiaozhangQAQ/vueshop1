<template>
	<div class="">
		<search class='mysearch' @on-submit="onSubmit" ref="search" style = "position: fixed;" v-model = 'value'></search>
	</div>
</template>

<script>
	import { Search } from 'vux'
	
	export default {
		components: {
		    Search
		},
		methods:{
			onSubmit(){
				this.$emit('searchvalch',{a:'11'})
			}
		},
		data () {
		    return {
		      results: [],
		      value: ''
		    }
		},
		mounted:function(){
		},
		props:['searchval'],
		
	}
</script>

<style>
	.mysearch{
		position: fixed;
		z-index: 100;
	}
	.weui-search-bar__box .weui-icon-search{
		top: 14px !important;
	}
</style>