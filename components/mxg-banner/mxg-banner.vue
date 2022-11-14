<template>
	<view class="banner-box" :style="{'background': `linear-gradient(${bgcColor || '#345dc2'} 50%, #F8F9FB)`}">
		<view class="banner-bg">
			<swiper :indicator-dots="true" indicator-active-color="#fff" indicator-color="rgba(255,255,255,0.3)" :autoplay="true" circular current="current" @change="imageChange" :interval="3000" :duration="1000">
				<swiper-item class="swiper-item" v-for="item in bannerList" :key="item.id">
					<image :src="item.imageUrl"></image>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
export default {
	name: 'mxg-banner',
	props: {
		bannerList: {
			typeof: Array,
			default: () => [
				// {
				// 	id: 1,
				// 	imageUrl: '/static/images/banner1.jpg',
				// 	background: '#45328c',
				// 	advertUrl: '/pages/course/course-details'
				// },
				// {
				// 	id: 2,
				// 	imageUrl: '/static/images/banner2.jpg',
				// 	background: '#006C00',
				// 	advertUrl: '/pages/course/course-details'
				// },
				// {
				// 	id: 3,
				// 	imageUrl: '/static/images/banner3.jpg',
				// 	background: '#0072B7',
				// 	advertUrl: '/pages/course/course-details'
				// }
			]
		}
	},
	data() {
		return {
			current:0,
			bgcColor:''
		};
	},
	methods:{
		imageChange(e){
			this.current=e.detail.current
			this.bgcColor = this.bannerList[this.current].background
		}
	}
};
</script>

<style lang="scss">
.banner-box {
	width: 100%;
	padding-top: 120rpx;
	/* #ifdef APP-PLUS*/
		padding-top: calc(var(--status-bar-height) + 120rpx);
	/* #endif */
	background-color: yellow;
	.banner-bg {
		width: 100%;
		// background-color: red;
		.swiper-item{
			width: 100%;
			height: 350rpx;
			/* #ifdef APP-PLUS */
			height: calc(var(--status-bar-height) + 350rpx);
			/* #endif */
			padding: 0 30rpx;
			image{
				width: 100%;
				height: 100%;
				border-radius: 15rpx;
			}
		}
	}
}
</style>
