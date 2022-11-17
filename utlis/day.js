import dayjs from "dayjs"
import "dayjs/locale/zh-cn"
dayjs.locale("zh-cn")

export const relativeTime = (val,format = "YY-MM-DD")=>{
	return dayjs(val).format(format)
}