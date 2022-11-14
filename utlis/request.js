import comfig from "@/comfig/comfig.js"
const request = (options)=>{
  return new Promise((resolve,reject)=>{
		uni.request({
			url:comfig.baseUrl + options.url,
			method:options.method || "GET",
			header:{
				...options.header
			},
			data:options.data || {},
			success:(res)=> {
				if(res.data.code===20000){
					resolve(res.data)
				}
			},
			fail:(e)=> {
				reject(e)
				console.log("err=>",e);
			}
		})
	})
}

export default request