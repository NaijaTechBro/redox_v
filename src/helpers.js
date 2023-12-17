import { formatDistanceToNow, parseISO } from "date-fns"

export const truncate = (str, maxlength) => {
	return str.length > maxlength ? str.slice(0, maxlength - 1) + "..." : str
}

export const postDate = time => {
	let newTime = ``
	if (time) {
		const newDate = parseISO(time)
		const timePeriod = formatDistanceToNow(newDate)
		newTime = `${timePeriod} ago`
	}
	return newTime
}

export const getBriefStr = (str, n) => (str.length > n ? str.substr(0, n - 1) + `...` : str)
