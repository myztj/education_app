<template>
	<view class="search_box">
		<view class="search_hotSearch">
			<view class="hotSearch_title">
				热门搜索
			</view>
			<view class="hotSearch_content">
				<view @click="handelClickTag(item)" class="content_item" v-for="(item,index) in hotList" :key="index">
					{{item}}
				</view>
			</view>
		</view>
		<view class="historySearch">
			<view class="historySearch_title">
				<view class="text">
					历史搜索
				</view>
				<view class="empty" @click="clearHistory">
					清空
				</view>
			</view>
			<view class="historySearch_content">
				<view @click="handelClickTag(item)" v-for="(item,index) in historyList" :key="index" class="historySearch_item">
					{{item}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {HISTORY_KEY} from "@/enum/enum.js"
	export default {
		data(){
			return{
				hotList:['Java', 'Python', 'Vue.js', 'React', 'SpringBoot', 'SpringCloud'],
				historyList:wx.getStorageSync(HISTORY_KEY) || ['java']
			}
		},
		methods:{
			clearHistory(){
				this.historyList=[]
				uni.removeStorageSync(HISTORY_KEY)
			},
			//点击搜索页面tag标签，把当前点击的item拿到，传给父组件
			handelClickTag(item){
				// 调用设置搜索框值的方法
				this.handleSetSearchValue(item)
				
				this.$emit('handelConfig',{value:item})
			}
		}
	}
</script>

<style lang="scss">
	.search_hotSearch{
		.hotSearch_title{
			margin: 20rpx 0;
		}
		.hotSearch_content{
			display:flex;
			flex-wrap: wrap;
			.content_item{
				padding: 10rpx 15rpx;
				font-size: 25rpx;
				color: #ccc;
				border: 1rpx solid #ccc;
				border-radius: 10rpx;
				margin: 15rpx 15rpx 15rpx 0;
				text-align: center;
			}
		}
	}
	.historySearch{
		 margin-top: 40rpx;
		.historySearch_title{
			display: flex;
			justify-content: space-between;
			.empty{
				color: #ccc;
			}
		}
		.historySearch_content{
			display:flex;
			flex-wrap: wrap;
			.historySearch_item{
				padding: 10rpx 15rpx;
				font-size: 25rpx;
				color: #ccc;
				border: 1rpx solid #ccc;
				border-radius: 10rpx;
				margin: 15rpx 15rpx 15rpx 0;
				text-align: center;
			}
		}
	}
</style>