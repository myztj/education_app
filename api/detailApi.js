import request from "@/utlis/request.js"

const getDetailUrlsApi = ()=>{
	return request({
		url:'/course/api/course/null',
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

export default {
	getDetailUrlsApi,
	getCommentListApi,
	getGroupListApi
}
