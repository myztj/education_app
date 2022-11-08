<template>
	<view>
        <!-- #ifdef MP-WEIXIN -->
        <search-input></search-input>
        <!-- #endif -->
	</view>
</template>

<script>
	// #ifdef MP-WEIXIN
	import searchInput from '@/components/search-input/search-input.vue'
	// #endif
	export default {
		// #ifdef MP-WEIXIN
		components:{
			searchInput
		},
		// #endif
		data() {
			return {
				
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>

</style>
