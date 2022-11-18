<template>
	<view class="getDetailUrl_box">
		<image @load="handelLoad" class="detailUrl" :src="detailUrl" mode="widthFix"></image>
		<image v-if="isShow" class="loading" src="../../../static/images/loading.gif" ></image>
		<view v-else class="footer-text">已经到达底部，没有更多内容了</view>
	</view>
</template>

<script>
	import detailApi from "@/api/detailApi.js"
	export default {
		data(){
			return{
				detailUrl:'',
				isShow:true
			}
		},
		methods:{
		   async getDetailUrl(){
				let  res = await detailApi.getDetailUrlsApi()
				console.log(res);
				this.detailUrl=res.data.detailUrls[0]
				uni.setStorageSync('courseDetail',res.data)
			},
			handelLoad(){
				this.isShow = false
			}
		},	
		created() {
			this.getDetailUrl()
		}
	}
</script>

<style lang="scss">
	image{
		width: 100%;
	}
	.getDetailUrl_box{
		width: 100%;
		.loading{
			display: block;
			margin: 0 auto;
			width: 90rpx;
			height : 90rpx;
		}
	}
	.footer-text{
		font-size: 55rpx;
		color: #777777;
		margin: 40rpx 0;
		// margin-bottom: 180rpx;
	}
</style>