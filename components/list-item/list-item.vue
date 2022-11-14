<template>
	<view class="lsit_item_box" :class="{ column: isColumn }">
		<view class="item_left">
			<image :src="item.mainImage" mode=""></image>
			<view class="time">{{ item.totalTime }}</view>
		</view>
		<view class="item_right">
			<view class="right_title text-ellipsis">{{ item.title }}。</view>
			<view class="name iconfont icon-touxiang">{{ item.nickName }}</view>
			<view class="info">
				<text class="iconfont icon-bofang_xiayijie" v-if="!item.isFree">{{ item.priceDiscount }}</text>
				<text class="iconfont icon-bofang_xiayijie" v-else>免费</text>
				<text class="iconfont icon-download">{{ item.studyTotal }} 人在学</text>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	props: {
		isColumn: {
			type: Boolean,
			default: false
		},
		item: {
			type: Object,
			default: () => ({
				// 默认值是对象，必须是小括号将对象括起来。
				id: 1,
				mainImage: 'http://10.idqqimg.com/qqcourse_logo_ng/ajNVdqHZLLAWb3qFGBhykjmcTvz9CWmwib2Qj7c3Vxjia4y5fgSoNdrMYIdH11Dl1OCraibA7u0mts/600',
				totalTime: '00:59:08',
				title: 'SpringBoot项目实战教程SpringCloud OAuth2 Vue分布式微服务架构',
				nickName: '梦老师1', // 课程老师
				isFree: 0, //是否免费：0收费，1免费
				priceOriginal: 999, // 原价
				priceDiscount: 699.9, // 优惠价
				studyTotal: 899
			})
		}
	}
};
</script>

<style lang="scss">
.lsit_item_box {
	display: flex;
	// margin: 30rpx 0;
	padding: 20rpx 0;
	border-bottom: 0.5px solid #ccc;
	.item_left {
		width: 290rpx;
		height: 160rpx;
		position: relative;
		margin-right: 30rpx;
		.time {
			position: absolute;
			bottom: 5rpx;
			right: 5rpx;
			padding: 0 10rpx;
			font-size: 15rpx;
			color: #fff;
			border-radius: 30rpx;
			background: rgba(0, 0, 0, 0.5);
		}
		> image {
			width: 100%;
			height: 100%;
			border-radius: 15rpx;
		}
	}
	.item_right {
		flex: 1;
		display: flex;
		flex-direction: column;
		.right_title {
			max-width: 365rpx;
			height: 70rpx;
			line-height: 35rpx;
			font-size: 28rpx;
			font-weight: bold;
		}
		.name {
			color: #ccc;
			font-size: 25rpx;
			margin: 10rpx 0 5rpx 0;
		}
		.info {
			.icon-bofang_xiayijie {
				color: #f60;
				margin-right: 20rpx;
				font-size: 28rpx;
			}
			.icon-download {
				color: #666;
				font-size: 25rpx;
			}
		}
	}
}
</style>
