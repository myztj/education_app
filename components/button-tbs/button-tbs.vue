<template>
	<view class="btn-box" @click="changeBtn">
		<view class="btn">
			{{name}}
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			name:{
				type:String,
				default:''
			}
		},
		name:"button-tbs",
		data() {
			return {
				
			};
		},
		methods:{
			changeBtn(){
				this.$emit('changeBtn')
			}
		}
	}
</script>

<style lang="scss">
.btn-box{
	width: 100%;
	padding: 20rpx;
	background-color: #fff;
	position: fixed;
	bottom: 0;
	.btn{
		width: 100%;
		height: 80rpx;
		text-align: center;
		line-height: 80rpx;
		color: #fff;
		border-radius: 50rpx;
		background-color: #0499fd;
	}
}
</style>