<template>
	<view>
		<web-view v-if="isUrl()" :src="url"></web-view>
		<view v-else class="tip column">
					<text>如需浏览，请长按网址复制后使用浏览器访问：</text>
					<text selectable>{{url}}</text>
				</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				url:''
			}
		},
		methods: {
			isUrl(){
				if(this.url){
					return this.url.indexOf("hxwendeng.com")!==-1
				}
			}
		},
		onLoad(options) {
			console.log(options.url);
			this.url=options.url
		}
	}
</script>

<style>

</style>
