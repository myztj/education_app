<template>
	<view>
		<!-- #ifdef MP-WEIXIN -->
		<search-input></search-input>
		<!-- #endif -->
		<!-- 轮播图 -->
		<mxgBanner :bannerList="bannerList"></mxgBanner>
		<!-- 分类列表 -->
		<classIfy :classifyList="classifyList"></classIfy>

		<mescroll-body ref="mescrollRef" @init="mescrollInit" @down="downCallback" @up="upCallback" :up="upOption">
			<view class="index_list">
				<!-- 热门推荐 -->
				<swiperMain name="热门推荐" word="HOT" :courseData="hotListdata"></swiperMain>
				<!-- 近期上新 -->
				<scrollCours name="近期上新" word="NEW" :courseData="newListdata"></scrollCours>
				<!-- 免费精选 -->
				<swiperMain name="免费精选" word="FREE" :courseData="isFree1Listdata"></swiperMain>
				<!-- 付费精品 -->
				<listCours name="付费精品" word="NICE" :courseData="isFree0Listdata"></listCours>
			</view>
		</mescroll-body>
	</view>
</template>

<script>
import MescrollMixin from '@/uni_modules/mescroll-uni/components/mescroll-uni/mescroll-mixins.js';

import searchInput from '@/components/search-input/search-input.vue';
import mxgBanner from '@/components/mxg-banner/mxg-banner.vue';
import searchModel from '@/common/js/searchModel.js';
import classIfy from '@/pages/index/components/classifyList.vue';
import scrollCours from '@/pages/index/components/scroll-cours.vue';
import swiperMain from '@/pages/index/components/swiper-main.vue';
import listCours from '@/pages/index/components/list-cours.vue';
import indexApi from '@/api/indexApi.js';
import IdexModel from '@/model/indexModel.js';
export default {
	mixins: [MescrollMixin], // 使用mixin
	components: {
		searchInput,
		mxgBanner,
		classIfy,
		swiperMain,
		scrollCours,
		listCours
	},
	data() {
		return {
			bannerList: [],
			hotListdata: [],
			newListdata: [],
			isFree1Listdata: [],
			isFree0Listdata: [],
			classifyList: [],
			current: 1,
			size: 10,
			upOption: {
				textLoading: '亲亲，正在为加载...',
				//这里必须配置  相当于下拉上拉的默认值
				page: {
					num: 0, // 当前页码,默认0,回调之前会加1,即callback(page)会从1开始
					size: 10 // 每页数据的数量
				},
				textNoMore: '-- 我也是有底线的 --'
			}
		};
	},
	onNavigationBarSearchInputClicked(){
		this.navTo("/pages/search/search")
	},
	onNavigationBarButtonTap: function(e) {
		let eIndex = e.index;
		if (eIndex == 0) {
			IdexModel.hangdelOpenScanCode();
		}
	},
	onLoad() {
		// #ifdef APP-PLUS
		searchModel.handelUpdateSetSearchText(this);
		// #endif
		this.getBannerList();

		// //页面加载加载所有数据
		// this.onloadData();
	},
	methods: {
		async onloadData() {
			try {
				this.getgetNavList();
				//热门推荐
				this.hotListdata = await this.getCourseList({ current: this.current, size: this.size, sort: 'hot' }).records;
				//近期推荐
				this.newListdata = await this.getCourseList({ current: this.current, size: this.size, sort: 'new' }).records;
				//免费精选
				this.isFree1Listdata = await this.getCourseList({ current: this.current, size: this.size, isFree: 1 }).records;
			} catch (e) {
				console.log('err=>>', e);
			}
		},

		async getPayCouresList(page) {
			console.log(page, 'page');
			//付费精品
			let res = await this.getCourseList({ current: page.num, size: page.size, isFree: 0 });
			const currentList = res.records;
			this.isFree0Listdata.push(...currentList);
			//数组的长度和数据的总totla必须穿，要不然数据刷新不会停止（主要思想是返回数据的条数，和数据的总条数相互成正比）
			this.mescroll.endBySize(currentList.length, res.total);
		},

		async getBannerList() {
			try {
				let res = await indexApi.getBannerListApi();
				console.log(res);
				this.bannerList = res.data;
			} catch (e) {
				console.log(e);
			}
		},
		async getgetNavList() {
			try {
				let res = await indexApi.getNavListApi();
				this.classifyList = res.data;
			} catch (e) {
				//TODO handle the exception
				console.log(e);
			}
		},
		
		async getCourseList(data) {
			console.log(data);
			try {
				let res = await indexApi.getCourseListApi(data);
				return res.data;
			} catch (e) {
				//TODO handle the exception
				console.log(e);
			}
		},
		//上拉/下拉刷新
		upCallback(page) {
			if (page.num == 1) {
				this.onloadData();
				this.isFree0Listdata=[]
			}
			console.log(page.num);
			this.getPayCouresList(page);
		}
	}
};
</script>

<style lang="scss">
.index_list {
	padding: 0 40rpx;
}
</style>
