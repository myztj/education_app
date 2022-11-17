<template>
	<view class="sticky-box">
		<!-- //头部tabs栏 -->
		<view class="tbs">
			<view @click.stop="handelClickTabs(index, item)" :class="{ active: tabsIndex == index }" v-for="(item, index) in tabsList" :key="item.id">{{ item.name }}</view>
		</view>
		<!-- //排序分类 -->
		<view class="sort-Indexed">
			<view class="sort-item" :class="{ active: item.status }" @click.stop="handelClicksort(index, item)" v-for="(item, index) in sortList" :key="item.id">
				{{ item.name }}
				<text @click.stop="handelClickIcon(index, item)" :class="`iconfont ${item.status ? 'icon-up' : 'icon-down1'}`"></text>
			</view>
		</view>
		<view class="sort_box" v-if="sortIndex !== '' && sortList[sortIndex].status">
			<view class="sort_list" :class="{ category: flag }">
				<classify v-if="flag" :expression ="true" @changeItem="changeItem" @handelTosearch = "handelTosearch"></classify>
				<view @click="handelClickItem(ele,i)" :class="{active:sortIdx===i}" v-if="!flag" class="sort_list_item" v-for="(ele, i) in this.sortIndexedList[sortIndex].children" :key="ele.id">{{ ele.cname }}</view>
			</view>
			<view class="shade"></view>
		</view>
	</view>
</template>

<script>
import classify from '@/pages/classify/classify.vue';
export default {
	components: {
		classify
	},
	name: 'searchTbs',
	props: {
		tabsList: {
			type: Array,
			default: () => [
				{
					id: 0,
					name: '课程'
				},
				{
					id: 1,
					name: '文章'
				},
				{
					id: 2,
					name: '问答'
				}
			]
		},
		sortIndexedList: {
			type: Array,
			default: () => [
				{
					id: 0,
					name: '综合排序',
					status: false,
					children: [{ id: '01', cname: '综合排序' }, { id: '02', cname: '最新排序' }, { id: '03', cname: '热门排序' }]
				},
				{
					id: 1,
					name: '全部课程',
					status: false,
					children: [{ id: 11, cname: '全部课程' }, { id: 12, cname: '付费课程' }, { id: 13, cname: '免费课程' }]
				},
				{
					id: 2,
					name: '全部分类',
					status: false
				}
			]
		}
	},
	data() {
		return {
			tabsIndex: 0,
			sortIndex: '',
			sortList:JSON.parse(JSON.stringify(this.sortIndexedList)),
			flag: false,
			sortIdx:0
		};
	},
	mounted() {

	},
	methods: {
		handelClickItem(ele,i){
			this.sortIdx = i
			this.sortList[this.sortIndex].name=ele.cname
		},
		changeItem(obj){
          this.sortList[this.sortList.length-1].name = obj.name
		},
		handelTosearch(obj){
			console.log(obj)
			if(obj.name=="不限"){
				this.sortList[this.sortList.length-1].name = obj.cname
			}else{
				this.sortList[this.sortList.length-1].name = obj.name
			}
		},
		handelClickTabs(index, item) {
			this.$emit('handelClickTabs',index)
			this.tabsIndex = index;
			if (item.name === '文章' || item.name === '问答') {
				let i = this.sortList.findIndex(item => item.name === '全部课程');
				if (i > 0) {
					this.sortList.splice(i, 1);
				}
			} else {
				this.sortList = JSON.parse(JSON.stringify(this.sortIndexedList));
			}
		},
		handelClicksort(index, m) {
			let i = this.sortList.findIndex(item=>item.id==m.id)
			this.flag = i > 0 ? (this.flag = !this.flag) : false;
			this.sortIndex = index;
			this.sortList.forEach((item, i) => {
				if (item.name == m.name) {
					item.status = !item.status;
				} else {
					item.status = false;
				}
			});
		},
		//点击icon切换
		handelClickIcon(index, m) {
			this.flag = m.name === '全部分类' ? (this.flag = !this.flag) : false;
			this.sortIndex = index;
			this.sortList.forEach((item, i) => {
				if (item.name == m.name) {
					item.status = !item.status;
				} else {
					item.status = false;
				}
			});
		}
	},
	// watch:{
	// 	"sortList.name":{
	// 		deep:true,
	// 		handler(newval){
	// 			console.log(newval);
	// 			this.sortList[this.sortList.length-1] = newval.name
	// 		}
	// 	}
	// }
};
</script>

<style lang="scss">
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
.sort-Indexed {
	background-color: #fff;
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-bottom: 1rpx solid #eee;
	> view {
		flex: 1;
		text-align: center;
		padding: 20rpx 0;
	}
}
.sort_box {
	.category {
		height: 580rpx;
	}
	.sort_list {
		background-color: #fff;
		.sort_list_item {
			line-height: 80rpx;
			margin-left: 50rpx;
		}
	}
	.shade {
		z-index: 99;
		position: fixed;
		left: 0;
		right: 0;
		width: 100%;
		height: 100%;
		background-color: black;
		opacity: 0.2 !important;
	}
}
	.active {
		color: #0385fe;
	}
// // 粘顶
.sticky-box {
	z-index: 999;
	position: -webkit-sticky;
	position: sticky; /* 其他浏览器 */
	top: var(--window-top);
}
</style>
