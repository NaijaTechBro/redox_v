import Axios from "axios"
import { URL } from "../url"

const api = Axios.create({
	baseURL: URL,
	headers: {
		"X-Requested-With": "XMLHttpRequest",
		"Content-Type": "application/json",
	},
	withCredentials: true,
})

let store

export const injectStore = _store => {
	store = _store
}

api.interceptors.request.use(
	async request => {
		const state = store?.getState()
		if (state?.auth?.token) {
			request.headers.Authorization = `Bearer ${state?.auth?.token}`
		}
		return request
	},
	error => {
		return Promise.reject(error)
	},
)

api.interceptors.response.use(
	async response => {
		return response
	},
	error => {
		if (error?.response?.status === 403) {
			// store?.dispatch(logoutUser() as any)
		} else if (error?.response?.status === 400) {
			console.error(error?.response?.data)
		} else {
			console.error(error?.response?.data?.message || "Encountered an issue processing your request, Please try again.")
		}
		return Promise.reject(error)
	},
)

export default api
