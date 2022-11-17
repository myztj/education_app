<template>
	<view class="srticle_box">
		<view class="srticle_up">
			<view class="srticle_up_letf">
				<view class="up_letf_title">{{item.title}}</view>
				<view class="up_letf_summary text-ellipsis">{{item.summary}}</view>
			</view>
			<view class="srticle_up_right">
				<image v-if="item.imageUrl" :src="item.imageUrl" mode=""></image>
			</view>
		</view>
		<view class="srticle_down">
			<text>{{item.nickName}}</text>
			<text> · {{updateTimme}}</text>
			<text> · {{item.thumhup}}赞</text>
		</view>
	</view>
</template>

<script>
	import {relativeTime} from "@/utlis/day.js"
	export default {
		name:"article-list",
		props:{
			item:{
				type:Object,
				default:()=>({
					id: 10,
					userId: 1,
					nickName: "武艳",
					title: "导效今海住先八程统周住花似懂非懂。",
					summary: "百这老之处度委东平太象程线车提种中儿克又王件造使例直权集许转酸第作人下属机消且适只按员条道酸并强种统由干根即之水权标会计斗所不长口住明真北第除明等斯门权。",
					imageUrl: "https://img.alicdn.com/bao/uploaded/i2/3603079088/O1CN01rGCkfb2H0M1O7Lj45_!!0-item_pic.jpg",
					viewCount: 96320,
					thumhup: 98438,
					updateDate: new Date()
				})
			}
		},
		computed:{
			updateTimme(){
				return relativeTime(this.item.updateDate,"YYYY年MM月DD日")
			}
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
.srticle_box{
	padding: 30rpx;
	.srticle_up{
		display: flex;
		justify-content: space-between;
		.srticle_up_letf{
			.up_letf_title{
				font-size: 35rpx;
				font-weight: 600;
			}
			.up_letf_summary{
				padding-top: 5rpx;
				font-size: 26rpx;
				color: #999;
				-webkit-line-clamp: 1; //最多1行
			}
		}
		.srticle_up_right{
			margin-left: 12rpx;
			>image{
				width: 220rpx;
				height: 140rpx;
				border-radius: 10rpx;
			}
		}
	}
	.srticle_down{
		font-size: 26rpx;
		color: #999;
	}
}
</style>