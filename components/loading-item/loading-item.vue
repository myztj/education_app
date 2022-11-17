<template>
	<view class="loading-box">
		<view class="loading-up">
			<view class="up_left">
				<view class="head"><image :src="item.userImage" mode=""></image></view>
				<view class="info">
					<view class="info_name">{{item.nickName}}</view>
					<view class="info_time">1822年05月06日</view>
				</view>
			</view>
			<view class="icon"><text class="iconfont icon-haoping2"></text></view>
		</view>
		<view class="loading-down">{{item.content}}。</view>
		<view class="reply" v-if="item.children!=null">讲师回复：{{item.children.content}}</view>
	</view>
</template>

<script>
export default {
	name:"loading-item",
	props:{
		item:{
			type:Object,
			default:()=>{
				// children: {id: 19, userId: 1, nickName: "于芳", userImage: null, content: "感谢你一直以来的支持！梦学谷-陪你学习，伴你梦想！"},
				// content: "安二路率将组展速连离价学造。",
				// createDate: "2015-07-03 14:18:47",
				// id:1,
				// isGood:0,
				// nickName:"锺秀英",
				// parentId:"-1",
				// userId:1,
				// userImage:"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
			}
		}
	},
	data() {
		return {

		};
	}
}
</script>

<style lang="scss">
.loading-box {
	padding: 30rpx;
	.loading-up {
		margin-bottom: 20rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		.up_left {
			display: flex;
			align-items: center;
			.info {
				.info_name {
					font-weight: bold;
				}
				.info_time {
					color: #ccc;
					font-size: 28rpx;
				}
			}
			.head {
				width: 100rpx;
				height: 100rpx;
				border-radius: 50%;
				margin-right: 20rpx;
				> image {
					width: 100%;
					height: 100%;
					border-radius: 50%;
				}
			}
		}
		.icon {
			color: red;
		}
	}
	.reply {
		margin-top: 25rpx;
		padding: 20rpx;
		background-color: #f8f9fb;
		color: #828794;
		font-size: 30rpx;
	}
}
</style>
