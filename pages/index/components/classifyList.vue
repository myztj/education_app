<template>
	<view class="calssify-box">
		<view class="calssify-item" @click="goToSearch(item)" v-for="item in classifyList.slice(0,7)" :key="item.id">{{item.name}}</view>
		<view class="calssify-item" @click="goToclassifyPage">
			全部分类
		</view>
		</view>
</template>

<script>
export default {
	props: {
		classifyList: {
			typeof: Array,
			default: () => [
				{
					id: 1,
					name: 'Java'
				},
				{
					id: 2,
					name: '前端'
				},
				{
					id: 3,
					name: 'Python'
				},
				{
					id: 4,
					name: 'UI设计'
				},
				{
					id: 5,
					name: '运维'
				},
				{
					id: 6,
					name: '人工智能'
				},
				{
					id: 7,
					name: '实战课程'
				},
				{
					id: 8,
					name: '数字孪生平台'
				},
				{
					id: 9,
					name: '3D园区'
				}
			]
		}
	},
	data(){
		return{
			
		}
	},
	methods:{
		goToclassifyPage(){
			console.log('跳转分类页');
			uni.switchTab({
				url:"/pages/classify/classify"
			})
		},
		goToSearch(item){
			let indexs = this.classifyList.findIndex(v=>v.name==item.name)
			console.log(indexs);
			uni.setStorageSync("indexs",indexs)
			uni.switchTab({
				url:"/pages/classify/classify"
			})
		}
	}
};
</script>

<style lang="scss">
	.calssify-box{
		// display: grid;
		// grid-template-columns: repeat(5,1fs);
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		padding: 0 30rpx;
		.calssify-item{
			width: 22%;
			text-align: center;
			height: 70rpx;
			line-height: 70rpx;
			background-color: $i-color-grey;
			border-radius: 20rpx;
			margin: 10rpx;
			font-size: 26rpx;
			font-weight: 600;
		}
	}
</style>
