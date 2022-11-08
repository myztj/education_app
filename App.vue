<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/* 小程序需要的公共css样式 */
	@import url("@/common/style/common.css");
	/*小程序开发模式下只支持本地字体图标 */
	@import url("~@/static/icon/iconfont.css");
	/*每个页面公共css */
	/* 如果要打包上线请打开线上地址 */
	/* @import url("https://at.alicdn.com/t/font_2116121_4hwc792r6yl.css"); */
</style>
