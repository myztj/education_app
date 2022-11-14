<template>
	<view class="main-box">
		<listBox :name="name" :word="word">
			<swiper :style="{height: `${200*rows}rpx`}">
				<swiper-item v-for="(v,i) in column" :key="i">
					<listItem v-for="(item,index) in courseData.slice(i*rows,(i+1)*rows)" :key="index" :item="item"></listItem>
				</swiper-item>
				</swiper>
		</listBox>
	</view>
</template>

<script>
	import listBox from "@/pages/index/components/list-box.vue"
	import listItem from "@/components/list-item/list-item.vue"
	import courseData from "@/mock/courseData.js"
	export default{
		props:{
			name:{
				type:String,
				default:''
			},
			word:{
				type:String,
				default:''
			},
			column:{
				typeof:[String | Number],
				default:2
			},
			rows:{
				typeof:[String | Number],
				default:5
			},
			courseData:{
				type:Array,
				default:()=>courseData
			}
		},
		components:{
			listBox,
			listItem
		}
	}
</script>

<style lang="scss">
</style>