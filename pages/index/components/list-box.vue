<template>
	<view class="list-box">
		<view class="box">
			<view class="title_left">
				<text class="title">{{name}}</text>
				<text class="hot">{{word}}</text>
			</view>
			<view class="title_right">
				<text class="all">全部</text>
				<text class="iconfont icon-right"></text>
			</view>
		</view>
		<slot></slot>
	</view>
</template>

<script>
	export default {
		props:{
			name:{
				type:String,
				default:''
			},
			word:{
				type:String,
				default:''
			}
		}
	}
</script>

<style lang="scss">
	.list-box{
		margin-top: 40rpx;
		.box{
			display: flex;
			justify-content: space-between;
			.title_left{
				display: flex;
				.title{
					color: #303133;
					font-size: 38rpx;
					font-weight: 800;
				}
				.hot{
					padding: 0 10rpx;
					color: #fff;
					border-radius: 30rpx 30rpx 30rpx 0;
					background: linear-gradient(to right,#ea6b40,#e63a2a);
					font-size: 20rpx;
					text-align: center;
					height: 35rpx;
					line-height: 35rpx;
					margin-left: 10rpx;
					margin-top: 10rpx;
				}
			}
			.title_right{
				.all{
					font-size: 32rpx;
					color: #666;
				}
				.iconfont{
					font-size: 25rpx;
				}
			}
		}
	}
	
</style>
