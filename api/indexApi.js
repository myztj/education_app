import request from "@/utlis/request.js"
// 获取轮播图数据
const getBannerListApi = ()=>{
	return request({url:'/article/api/advert/show/1',method:'GET'})
}

const getNavListApi=()=>{
	return request({url:'/article/api/category/label/list',method:'GET'})
}

const getCourseListApi=(data)=>{
	return request({url:'/course/api/course/search',method:'POST',data})
}

export default {
	getBannerListApi,
	getNavListApi,
	getCourseListApi,
	
}