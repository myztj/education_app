<template>
	<view class="section">
		<block v-for="(item,index) in chapterList" :key="index">
			<view class="chapters">
				第{{index+1}}章 {{item.name}}
			</view>
			<view class="data-list" v-for="(ele,i) in item.sectionList" :key="i" @click="handelArticle(ele)">
				<view class="data-left">
					<text class="iconfont icon-roundrightfill"></text>
					<text class="title text-ellipsis">{{index+1}}-{{i+1}} {{ele.name}}</text>
				</view>
				<view class="data-right" v-if="!ele.isFree">
					试看
				</view>
			</view>
		</block>
	</view>
</template>

<script>
	export default {
		props:{
			chapterList: {
				type: Array,
				default: () => ([{
					id: 1,
					name: '课程介绍',
					sectionList: [ //课节信息
						{
							id: 1,
							name: '什么是uni-app框架',
							isFree: 1, // 是否付费（0付费，1免费）
						},
						{
							id: 2,
							name: '安装HBuilderX和插件',
							isFree: 0, // 是否付费（0付费，1免费）
						},
						{
							id: 3,
							name: '创建uni-app项目和运行Web浏览器',
							isFree: 0, // 是否付费（0付费，1免费）
						}
					]
				}, {
					id: 2,
					name: '初始化梦学谷在线教育APP项目',
					sectionList: [ //课节信息
						{
							id: 1,
							name: '创建运行项目和完善项目目录',
							isFree: 0, // 是否付费（0付费，1免费）
						},
						{
							id: 2,
							name: '拷贝静态资源到项目和mixin混合讲解',
							isFree: 1, // 是否付费（0付费，1免费）
						}
					]
				}])
			}
		},
		methods:{
			handelArticle(item){
			 this.$emit('handelArticle',item)
			}
		}
	}
</script>

<style lang="scss">
	.section{
		padding: 20rpx;
	}
	.text-ellipsis {
		-webkit-line-clamp: 1; //最多1行
	}
	.chapters{
		margin-top: 30rpx;
		margin-bottom: 10rpx;
		font-weight: bold;
		font-size: 35rpx;
	}
	.data-list{
		display: flex;
		justify-content: space-between;
		align-content: center;
		font-size: 30rpx;
		border-bottom: 1rpx solid #ccc;
		line-height: 40rpx;
		color: #3d3c40;
		padding: 26rpx 0;
		.data-left{
			display: flex;
            align-items: center;
			.title{
				width: 470rpx;
			}
		}
		.data-right{
			color:#0274fe ;
		}
	}
</style>