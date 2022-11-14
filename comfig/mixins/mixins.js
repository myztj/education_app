export default {
	data(){
		return{
			
		}
	},
	methods:{
		navTo(url,options={}){
			if(!url) return
			if(options.login){
				uni.navigateTo({
					url:"/pages/login/login"
				})
			}
			uni.navigateTo({
				url
			})
		},
		navBack(delta=1){
			uni.navigateBack({
				delta
			})
		},
		
		handleSetSearchValue(item){
					// #ifdef APP-PLUS
					// APP设置搜索框的值
					const currentWebview = this.$mp.page.$getAppWebview();
					currentWebview.setTitleNViewSearchInputText(item)
					// #endif
					
					// #ifdef H5
					// H5设置搜索框的值
					// 获取 ·搜索您想要的内容· 这段文本的父元素
					//这里 this.nextTick是做了一个兼容，是预防页面还没有加载完毕获取不到示例。加了this.nextTick就是等待示例加载完成后获取示例
					this.$nextTick(()=>{
						//获取到输入框中的placeholder
						const placeholder = document.querySelector('.uni-page-head-search-placeholder')
						// 设置父元素的内容为空
						placeholder.innerHTML = ''
						// 获取搜索的输入框
						const inputSearch = document.querySelector('.uni-input-input[type=search]')
						// 设置输入框的内容为所点击的内容
						inputSearch.value = item
					})
					// #endif
				}
	}
}