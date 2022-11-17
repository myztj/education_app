<template>
	<view>
		<!-- #ifdef MP-WEIXIN -->
		<uni-search-bar placeholder="请输入你想要查询的内容" :focus="focus" cancelButton="always" clearButton="auto" :radius="100" @cancel="navBack()" @confirm="handelConfig">
			<template v-slot:searchIcon>
				<text class="iconfont icon-search"></text>
			</template>
			<template v-slot:clearIcon>
				<text class="iconfont icon-roundclosefill"></text>
			</template>
		</uni-search-bar>
		<!-- #endif -->
		<!-- //热搜/历史搜索 -->
		<hotSaerch v-if="searched" @handelConfig="handelConfig"></hotSaerch>
		<!-- //排序组组件 -->
		<search-tbs @handelClickTabs="handelClickTabs" v-if="!searched"></search-tbs>
		<mescroll-body ref="mescrollRef" @down="downCallback" @up="upCallback" :up="upOption">
			<!-- 列表组件 -->
			<list-item v-if="showIndex==0" v-for="(item, index) in tbsList" :key="item.id" :item="item"></list-item>
			<!-- //文章列表 -->
			<article-list v-if="showIndex==1" v-for="(item,index) in articleList" :key="item.id" :item="item"></article-list>
		</mescroll-body>
	</view>
</template>

<script>
import searchTbs from '@/components/searchTbs/searchTbs.vue';
import { HISTORY_KEY } from '@/enum/enum.js';
import uniSearchBar from '@/uni_modules/uni-search-bar/components/uni-search-bar/uni-search-bar.vue';
import hotSaerch from '@/pages/search/components/hotSearch.vue';
import indexApi from '@/api/indexApi.js';
import searchApi from "@/api/searchApi.js"
export default {
	components: {
		hotSaerch,
		uniSearchBar,
		searchTbs
	},
	data() {
		return {
			articleList:[],
			showIndex:0,
			focus: false,
			params: null,
			navList: [],
			searchList: [],
			content: '',
			// #ifdef APP-PLUS
			currentWebview: null,
			// #endif
			searched: true,
			tbsList: [],
			upOption: {
				page: {
				 size: 10 // 每页数据的数量,默认10
				},
				noMoreSize: 5, // 配置列表的总数量要大于等于5条才显示'-- END --'的提示
				empty: {
					tip: '暂无相关数据'
				}
			}
		};
	},
	methods: {
		//获取文章列表数据
		async getArticleList(page){
			// let res = await searchApi.getArticleListApi({ current: page.num, size: page.size})
			if(page.num==1){
				let res = await searchApi.getArticleListApi({ current: page.num, size: page.size})
				this.articleList = res.data.records
			}
			let res = await searchApi.getArticleListApi({ current: page.num, size: page.size})
			console.log(page.num);
		},
		//切换tbs时获取下标，用来判断显示那个组件
		handelClickTabs(index){
			this.showIndex = index
		},
		//组件mescroll下拉后调函数
		upCallback(page) {
		this.getTbsList(page);
		this.getArticleList(page)
		},
		//组件mescroll上拉回调函数
		downCallback(){},
		//获取列表数据
		async getTbsList(page) {
			try {
				let res = await indexApi.getCourseListApi({ current: page.num, size: page.size, isFree: null });
				let currentList = res.data.records
				this.tbsList = res.data.records;
			    this.mescroll.endByPage(currentList.length, res.data.total);
			} catch (e) {
				//TODO handle the exception
			}
		},
		async getNavList() {
			let res = await indexApi.getNavListApi();
			this.navList = res.data;
		},
		//拿到点击tag标签的item
		handelConfig(val) {
			//在data创建一个变量装起来，判断传过来的值是否存在（是否为空）,判断val.value是否有值，有的话就直接给this.content没有的话等于本身
			this.content = val && val.value ? val.value : this.content;

			//让热门搜索和历史记录隐藏实现查询
			this.searched = false;

			this.handelSetHistoryData();
		},
		//处理分类传过来的信息
		searchParams(options) {
			// #ifdef APP-PLUS
			this.currentWebview = this.$mp.page.$getAppWebview();
			// #endif

			if (JSON.stringify(options) !== '{}') {
				this.params = options;

				this.handleSetSearchValue(options.labelName);

				this.handelConfig({ value: options.labelName });
			} else {
				// #ifdef APP-PLUS
				this.currentWebview.setTitleNViewSearchInputFocus(true);
				// #endif

				// #ifdef MP-WEIXIN
				this.focus = true;
				// #endif
			}
		},

		handelSetHistoryData() {
			uni.getStorage({
				key: HISTORY_KEY,
				success: res => {
					this.content && res.data.indexOf(this.content) < 0 && res.data.unshift(this.content);
					uni.setStorageSync(HISTORY_KEY, res.data);
				},
				fail: err => {
					this.content && uni.setStorageSync(HISTORY_KEY, [this.content]);
					console.log('err=>', err);
				}
			});
		}
	},
	onLoad(options) {
		this.getNavList();
		this.searchParams(options);
	},
	//搜索框内容变化后的生命周期，类似于input的change事件
	onNavigationBarSearchInputChanged(e) {
		this.content = e.text;
	},
	//监听App键盘触发确认事件
	onNavigationBarSearchInputConfirmed() {
		console.log('触发了键盘');
		// #ifdef APP-PLUS
		this.currentWebview.setTitleNViewSearchInputFocus(false);
		// #endif

		this.handelConfig();
	},
	//监听右侧取消按钮触发
	onNavigationBarButtonTap(e) {
		if (e.index === 0) this.navBack();
	}
};
</script>

<style lang="scss">
.box {
	margin: 0 40rpx;
}
</style>
