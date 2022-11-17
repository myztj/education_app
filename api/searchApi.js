import request from "@/utlis/request.js"


const getArticleListApi = (data)=>{
	return request({
		url:'/article/api/article/search',
		method:"POST",
		data
	})
}


export default {
	getArticleListApi
}