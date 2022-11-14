<template>
	<view class="search-box">
		<input class="search-input" @click="navTo('/pages/search/search')" disabled type="text" placeholder="搜索你想要的内容">
	</view>
</template>

<script>
	export default {
		name:"search-input",
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
 .search-box{
	 position: absolute;
	 top: 30rpx;
	 left: 0;
	 z-index: 999;
	 width: 100%;
	 .search-input{
		 background-color: #f8f8f8;
		  height: 70rpx;
		  border-radius: 30rpx;
		  text-align: center;
          line-height: 40rpx;
		  margin: 0 20rpx;
	 }
 }
</style>