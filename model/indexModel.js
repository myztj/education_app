

class IndexModel {
	static async hangdelOpenScanCode() {
		try {
			// let res = await uni.scanCode()
			// console.log(res);
			uni.navigateTo({
				url: '/pages/public/web-view?url=https://baidu.com',
				// url : `/pages/public/web-view?url=https://wap.hxwendeng.com/index`
			})

		} catch (e) {
			//TODO handle the exception
			console.log("err=>>>",e);
		}
	}
}

export default IndexModel
