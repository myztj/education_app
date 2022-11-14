class searchModel {
	static handelUpdateSetSearchText(ctx) {
		const arr = ['APP · 微信小程序', 'Java · SprinBoot', 'SpringCloud · SpringSecurity', 'Vue · React']
		let i = 0;
		searchModel.handelUpdateGetSearchText(ctx, arr[i])
		setInterval(() => {
			i = i < 3 ? ++i : 0
			searchModel.handelUpdateGetSearchText(ctx, arr[i])
		}, 3000)
	}
	static handelUpdateGetSearchText(ctx, data) {
		const webview = ctx.$scope.$getAppWebview();
		webview.setStyle({
			"titleNView": {
				"searchInput": {
					"placeholder": data
				}
			}
		})
	}
}

export default searchModel
