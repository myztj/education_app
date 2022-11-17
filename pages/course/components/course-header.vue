<template>
	<view class="hesder_box">
		<view class="hesder_up">
			<image :src="item.mainImage" mode=""></image>
		</view>
		<view class="hesder_down">
			<view class="price">
				<text>￥{{item.priceDiscount}}</text>
				<text>￥{{item.priceOriginal}}</text>
				<text>优惠价</text>
			</view>
			<view class="title text-ellipsis">
				{{item.title}}
			</view>
			<view class="estimate">
				<text class="iconfont icon-haoping2">{{item.goodRate}}好评</text>
				<text class="iconfont icon-touxiang2">{{item.studyTotal}}人在学</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props : {
			item : {
				type : Object,
				default : () => ({
					"id": 10,
					"title": "Uniapp兼容多端在线教育项目实战",
					"studyTotal": 590, //在学人数
					"goodRate": '100%', //好评率
					"mainImage":"https://gd4.alicdn.com/imgextra/i4/3603079088/O1CN01dczOSM2H0LvTowhkl_!!3603079088.png",
					"isFree": 0, // 0 付费，1免费
					"priceOriginal": 614.51, //原价
					"priceDiscount": 281.91 // 优惠
				})
			}
		}
	}
</script>

<style lang="scss">
	.hesder_up{
		width: 100%;
		height: 420rpx;
		>image{
			width: 100%;
			height: 100%;
		}
	}
	.hesder_down{
		border-top: 25rpx solid #f8f9fb;
		border-bottom: 25rpx solid #f8f9fb;
		padding: 30rpx;
		.price{
			>text{
			  &:first-child{
				  font-size: 45rpx;
				  font-weight: bold;
				  color: red;
			  }
			  &:nth-child(2){
				  font-size: 30rpx;
				  text-decoration: line-through;
				  color:#B6BBBF;
				  padding: 0 20rpx;
			  }
			  &:last-child{
				  font-size: 20rpx;
				  border: 1rpx solid red;
				  color:red;
				  border-radius: 10rpx;
				  padding: 0 3rpx;
			  }
			}
		}
		.title{
			font-size: 40rpx;
			font-weight: bold;
			margin-bottom: 30rpx;
			-webkit-line-clamp: 1; //1最多行
		}
		.estimate{
			
			color:  #7d828f;
			>text{
				font-size: 16rpx;
				padding: 10rpx;
				background-color: #eee;
				margin-right: 20rpx;
				border-radius: 30rpx;
			}
		}
	}
</style>