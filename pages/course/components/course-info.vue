<template>
	<view class="getDetailUrl_box">
		<image :src="detailUrl" mode="widthFix"></image>
	</view>
</template>

<script>
	import detailApi from "@/api/detailApi.js"
	export default {
		data(){
			return{
				detailUrl:''
			}
		},
		methods:{
		   async getDetailUrl(){
				let  res = await detailApi.getDetailUrlsApi()
				console.log(res);
				this.detailUrl=res.data.detailUrls[0]
			}
		},
		created() {
			this.getDetailUrl()
		}
	}
</script>

<style lang="scss">
	.getDetailUrl_box{
		width: 100%;
		height: 100%;
		>image{
			width: 100%;
			height: 100%;
		}
	}
	
</style>