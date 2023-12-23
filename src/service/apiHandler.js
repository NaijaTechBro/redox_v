// import { getFormData } from "@/utils/general"
import { createApi } from "@reduxjs/toolkit/query/react"
import { URL } from "../url"
import api from "./api"
import { API_ROUTES } from "./endpoints"

const axiosBaseQuery =
	({ baseUrl }) =>
	async ({ url, method, data, headers, params }) => {
		try {
			const result = await api({
				url: baseUrl + url,
				method,
				data,
				params,
				headers,
			})
			return { data: result.data }
		} catch (axiosError) {
			let err = axiosError
			return {
				error: {
					status: err.response?.status,
					data: err.response?.data || err.message,
				},
			}
		}
	}

export const apiHandler = createApi({
	reducerPath: "apiReducer",
	refetchOnReconnect: true,
	refetchOnMountOrArgChange: true,
	baseQuery: axiosBaseQuery({
		baseUrl: URL,
	}),
	endpoints: builder => ({
		// login: builder.mutation({
		// 	query: ({ email, password }) => ({
		// 		url: API_ROUTES.LOGIN,
		// 		method: "POST",
		// 		data: getFormData({ email, password }),
		// 	}),
		// }),
		categories: builder.query({
			query: () => ({
				url: API_ROUTES.GET_CATEGORIES,
				method: "GET",
			}),
		}),
		// deleteAdmin: builder.mutation({
		//     query: id => ({
		//         url: `${ADMIN_API_ROUTES.DELETE_ADMIN}/${id}`,
		//         method: 'DELETE',
		//     }),
		// }),
	}),
})

export const { useCategoriesQuery } = apiHandler
