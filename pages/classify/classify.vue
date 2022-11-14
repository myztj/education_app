<template>
	<view class="box">
		<scroll-view scroll-y="true" class="classify_left">
			<view v-for="(item,index) in classifyList" @click="changeItem(index)" :class="{active:indexActive==index}" class="left_item" :key="index">{{item.name}}</view>
		</scroll-view>
		<scroll-view scroll-y="true" class="classify_rigth">
			<view class="right_item">
					<view @click="handelTosearch(item)" v-for="(item,index) in classifyListItem" :key="index">{{item.name}}</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import indexApi from '@/api/indexApi.js'
	export default {
		data() {
			return {
				classifyList:[],
				classifyListItem:[],
				indexActive:0
			}
		},
		methods: {
			async getClassifyList(){
				try{
				 let {data} = await indexApi.getNavListApi()
				 this.classifyList= data
				 this.classifyListItem = this.classifyList[this.indexActive].labelList
				 console.log(data);
				}catch(e){
					console.log("err=>>",e);
				}
			},
			changeItem(index){
				this.indexActive=index
				this.classifyListItem = this.classifyList[index].labelList
			},
			handelTosearch(item){
				console.log(item);
				this.navTo(`/pages/search/search?labelId=${item.id}&labelName=${item.name}&activeIndex=${this.indexActive}`)
			}
		},
		onNavigationBarButtonTap (e) {
			console.log(e.index);
			if(e.index==0){
				this.navTo('/pages/search/search')
			}
			// e的返回格式为json对象：{"text":"测试","index":0}
		},
		onLoad() {
			this.getClassifyList()
		}
	}
</script>

<style lang="scss">
 page{
		height: 100%;
	}
.box{
	height: 100%;
    display: flex;
	.classify_left{
		width: 200rpx;
		background-color: #F8F9FB;
		.left_item{
			padding: 50rpx 5rpx;
			font-size: 29rpx;
			text-align: center;
			position: relative;
			&::before{
				position: absolute;
				top: 50%;
				left: 0;
				transform: translateY(-50%);
				content: "";
				width: 0;
				height: 0;
				border-left: 6rpx solid #f60;
				transition: 0.5s;
			}
		}
		.active{
			font-weight: 600;
			color: #f60;
			&:before{
				height: 60rpx;
			}
		}
	}
	.classify_rigth{
		margin-left: 15rpx;
		margin-top: 20rpx;
		flex: 1;
		.right_item{
		  display: flex;
		  flex-wrap: wrap;
		  >view{
			  min-width: 160rpx;
			  padding: 15rpx 7rpx;
			  margin: 15rpx 7rpx;
			  border: 1rpx solid #ccc;
			  border-radius: 40rpx;
			  text-align: center;
			  font-size: 25rpx
		  }
		}
	}
}
</style>
