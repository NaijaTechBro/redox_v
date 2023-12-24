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

export const formatDate = inputDate => {
	const dateObject = new Date(inputDate)

	if (isNaN(dateObject.getTime())) {
		return "Invalid Date"
	}

	const day = dateObject.getDate().toString().padStart(2, "0")
	const month = (dateObject.getMonth() + 1).toString().padStart(2, "0") // Month is zero-based
	const year = dateObject.getFullYear()

	const formattedDate = `${day}/${month}/${year}`

	return formattedDate
}

export const getFormData = values =>
	Object.keys(values).reduce((formData, key) => {
		formData.append(key, values[key])
		return formData
	}, new FormData())
