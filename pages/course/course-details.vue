<template>
	<view class="booss"> 
		<course-header></course-header>
		<view class="course-details" :style="{ height: pageHeight + 'px' }">
			<!-- 头部导航 -->
			<tbs-list v-model="index"></tbs-list>

			<!-- 内容 -->
			<swiper class="swiper-box" @change="handelSlide" current="index" circular>
				<swiper-item v-for="(item,i) in 4" :key="i">
					<!-- <view class="swiper-item">{{item}}</view> -->
					<scroll-view @scrolltoupper="scrolltoupper" upper-threshold="0" class="scroll-view" :scroll-y="enableScroll">
						<view class="list_info">
							<course-info v-if="index==0"></course-info>
							<course-section @handelArticle="handelArticle" :chapterList="chapterList" v-if="index==1"></course-section>
							<course-comment v-if="index==2"></course-comment>
							<course-setmeal :groupList="GroupList" v-if="index==3"></course-setmeal>
						</view>
					</scroll-view>
				</swiper-item>
			</swiper>
		</view>
         <button-tbs @changeBtn="changeBtn" :name="isBuy || courseDetail.isFree?'立即觀看':'立即购买'"></button-tbs>
		 <view class="mask" v-if="isWatch">
		 	<view class="text" @click="isWatch=false">
		 		我是测试文字
		 	</view>
		 </view>w
	</view>
</template>

<script>
	import detailApi from "@/api/detailApi.js"
	import courseComment from "@/pages/course/components/course-comment.vue"
	import courseInfo from "@/pages/course/components/course-info.vue"
	import courseSection from "@/pages/course/components/course-section.vue"
	import courseSetmeal from "@/pages/course/components/course-setmeal.vue"
import tbsList from '@/components/tbs-list/tbs-list.vue';
import courseHeader from '@/pages/course/components/course-header.vue';
export default {
	components: {
		courseHeader,
		tbsList,
		courseComment,
		courseInfo,
		courseSection,
		courseSetmeal
	},
	data() {
		return {
			index: 0,
			pageHeight: 300,
			statuNavHeight: 0, //狀態欄加導航欄的高度
			enableScroll:false ,
			detailTop:0,
			chapterList:[],
			GroupList:[],
			isBuy:false,
			courseDetail:uni.getStorageSync("courseDetail"),
			isWatch:false
		};
	},
	onReady() {
		// const view = uni.createSelectorQuery().in(this).select('.course-details')
		// console.log("view=>",view)
		// view.fields({
		// 	rect : true
		// },(data)=>{
		// 	console.log("data=>", data)
		// 	this.detailTop = data.top
		// }).exec();
	},

	onLoad() {
		this.getPageHeight();
		this.getSectionList()
		this.getGroupList()
	},
	onReachBottom() {
		this.enableScroll=true
		console.log(123);
	},
	
	methods: {
		//点击观看事件
		handelArticle(item){
			if(this.isBuy || item.isFree){
				uni.showToast({
					title:"你购买了吗",
					icon:"none"
				})
			}else{
				this.isWatch=true
			}
		},
		//立即购买事件
		async changeBtn(){
			let token = uni.getStorageInfoSync("token")
			if(token){
				try{
					let res = await detailApi.getCourseIsBuyApi()
					this.isBuy=res.data.isBuy
				}catch(e){
					//TODO handle the exception
				}
			}
			console.log('点击购买');
		},
		//获取套餐数据
		async getGroupList(){
			try{
				let res = await detailApi.getGroupListApi()
				console.log(res);
				this.GroupList = res.data
			}catch(e){
				//TODO handle the exception
			}
		},
		//获取文章列表
		async getSectionList(){
			try{
				let res = await detailApi.getSectionListApi()
				this.chapterList = res.data
			}catch(e){
				//TODO handle the exception
			}
		},
		handelSlide(event) {
			console.log(event.detail.current);
			this.index = event.detail.current;
			let res = uni.getSystemInfoSync()
			
			uni.pageScrollTo({
				scrollTop:res.windowHeight,
				duration:300
			})
			
		},
		//监听scroll滚动到顶部是触发
		scrolltoupper(){
			uni.pageScrollTo({
				scrollTop:0,
				duration:300
			})
		},
		getPageHeight() {
			let res = uni.getSystemInfoSync();
			console.log(res);
			this.pageHeight = res.windowHeight;
			
			const statusBarHeight = res.statusBarHeight;
			
			let system = res.platform;
			
			if (system == 'ios') {
				this.statuNavHeight = statusBarHeight + 44;
			} else if (system === 'android') {
				this.statuNavHeight = statusBarHeight + 48;
			}
			this.pageHeight = res.windowHeight - this.statuNavHeight
		}
	}
};
</script>

<style lang="scss">
.course-details {
	overflow: hidden;
	.swiper-box,
	.scroll-view {
		height: 100%;
		.list_info{
			width: 100%;
			padding-bottom:180rpx;
		}
	}
}
.purchase{
	position: fixed;
	bottom: 0;
	left: 50%;
	transform: translateX(-50%);
	width: 95%;
	height: 80rpx;
	border-radius: 50rpx;
	background-color: #345dc2;
	text-align: center;
	line-height: 80rpx;
	color: #fff;
}
.mask{
	.text{
		text-align: center;
		line-height: 400rpx;
		color: #fff;
		font-size: 35rpx;
		
	}
}

</style>
