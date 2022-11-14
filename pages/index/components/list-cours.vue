<template>
	<listBox :name="name" :word="word">
			<listItem v-for="(item,index) in courseData" :key="index" :item="item"></listItem>
	</listBox>
</template>

<script>
	import listBox from "@/pages/index/components/list-box.vue"
	import listItem from "@/components/list-item/list-item.vue"
	import courseData from "@/mock/courseData.js"
	export default {
		props:{
			name:{
				type:String,
				default:''
			},
			word:{
				type:String,
				default:''
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

<style>
</style>