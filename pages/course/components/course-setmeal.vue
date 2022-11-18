<template>
	<view class="setmeal">
     <view class="setmeal_box" v-for="(item,index) in groupList" :key="item.id">
     	 <view class="title">
     	 	{{item.title}}
     	 </view>
		 <view class="setmeal_list">
			<list-item v-for="(ele,i) in item.list" :key="ele.id" :item="ele"></list-item>
		 </view>
		 <view class="setmeal_price">
		 	<view class="price_left">
		 		<text>￥{{item.groupPrice}}</text>
		 		<text>￥{{item.totalPrice}}</text>
		 	</view>
			<view class="price_right">
		       购买套餐
			</view>
		 </view>
     </view>
	</view>
</template>

<script>
	import courseGroupData from "@/mock/courseGroupData.js"
	export default {
		props:{
			groupList : {
				type : Array,
				default : () => {
					return courseGroupData
				}
			}
		}
	}
</script>

<style lang="scss">
	.setmeal{
		 padding: 0 36rpx;
	}
	.setmeal_box{
		box-shadow: 2px 0 10px 0 rgba(0,0,0, 0.1);
		padding: 0 20rpx;
		margin: 36rpx 0;
		background-color: #fff;
		border-radius: 20rpx;
		.title{
			font-size: 35rpx;
			font-weight: 500;
			padding-top: 20rpx;
		}
		.setmeal_price{
			display: flex;
			justify-content: space-between;
			align-items: center;
			line-height: 80rpx;
			.price_left{
			   text{
				   &:first-child{
				   	color: red;
				   	font-size:37rpx;
				   	margin-right: 10rpx;
					font-weight: bold;
				   }
				   &:last-child{
					   color: #ccc;
					   text-decoration: line-through;
				   }
			   }
			}
			.price_right{
				color: red;
			}
		}
	}
</style>