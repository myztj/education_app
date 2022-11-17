<template>
		<view class="tbs">
			<view @click.stop="handelClickTabs(index)" :class="{ active: value == index }" v-for="(item, index) in tbsList" :key="item.id">{{ item.name }}</view>
		</view>
</template>

<script>
	export default {
		name:"tbs-list",
		props:{
			value:{
				type:Number,
				default:0
			},
			tbsList:{
				type:Array,
				default:()=>[
					{
						id:0,
						name:'详情'
					},
					{
						id:1,
						name:'章节'
					},
					{
						id:2,
						name:'评论'
					},
					{
						id:3,
						name:'套餐'
					},
				]
			}
		},
		methods:{
			handelClickTabs(index){
				this.$emit('input',index)
			}
		}
	}
</script>

<style lang="scss">
	.active {
		color: #0385fe;
	}
.tbs {
	// z-index: 999;
	background-color: #fff;
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 20rpx 0;
	border-top: 1rpx solid #eee;
	border-bottom: 1rpx solid #eee;
	> view {
		text-align: center;
		position: relative;
		flex: 1;
		&:before {
			position: absolute;
			bottom: -20rpx;
			left: 50%;
			transform: translateX(-50%);
			width: 0;
			height: 0;
			content: '';
			border-bottom: 6rpx solid #f60;
			transition: 0.3s;
		}
	}
	.active {
		&:before {
			width: 60rpx;
		}
	}
}
</style>