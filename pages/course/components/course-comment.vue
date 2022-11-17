<template>
	<view class="comment-List">
	   <loading-item v-for="(item,index) in commentList" :key="index" :item="item"></loading-item>
	</view>
</template>

<script>
	import detailApi from "@/api/detailApi.js"
	export default{
		data(){
			return{
				commentList:[]
			}
		},
		methods:{
			async getCommentList(){
				let res = await detailApi.getCommentListApi()
				console.log(res);
				this.commentList = res.data
			}
		},
		created() {
			this.getCommentList()
		}
	}
</script>

<style lang="scss">
	.comment-List{
		padding-bottom: 180rpx;
	}
</style>