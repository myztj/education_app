<template>
		<view class="main-boxs">
	<listBox name="近期更新" word="NEW">
		<scroll-view class="list-scroll noScorll" scroll-x="true" >
			<view class="list-scroll-view" v-for="(item,index) in courseData" :key="index">
				<listItem :item="item" :isColumn="true"></listItem>
			</view>
		</scroll-view>
	</listBox>
	</view>
</template>

<script>
	import listBox from "@/pages/index/components/list-box.vue"
	import listItem from "@/components/list-item/list-item.vue"
	import courseData from "@/mock/courseData.js"
	export default{
		props:{
			courseData:{
				type:Array,
				default:()=>courseData
			}
		},
		components:{
			listBox,
			listItem
		}
	}
</script>

<style lang="scss">
	.list-scroll{
		white-space: nowrap;
		height: 380rpx;
		.list-scroll-view{
			overflow: hidden;
				display: inline-flex;
				width: 310rpx;
				background-color: #fff;
				 padding: 0 10rpx;
				 margin-right: 20rpx;
				 border-radius: 20rpx;
				 box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
			}
	}
</style>