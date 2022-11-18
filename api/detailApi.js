import request from "@/utlis/request.js"

const getDetailUrlsApi = ()=>{
	return request({
		url:'/course/api/course/null',
		method:"GET"
	})
}

const getSectionListApi = (id=10)=>{
	return request({
		url:'/course/api/chapter/section/list/'+id,
		method:"GET"
	})
}

const getCommentListApi = ()=>{
	return request({
		url:'/course/api/comment/list/null',
		method:'GET'
	})
}

const getGroupListApi = ()=>{
	return request({
		url:'/course/api/group/list/null',
		method:'GET'
	})
}

const getCourseIsBuyApi = (id=10)=>{
	return request({
		url:`/course/course/is-buy/${id}`,
		method:'GET'
	})
}

export default {
	getDetailUrlsApi,
	getCommentListApi,
	getGroupListApi,
	getSectionListApi,
	getCourseIsBuyApi
}
