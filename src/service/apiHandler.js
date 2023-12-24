// import { getFormData } from "@/utils/general"
import { createApi } from "@reduxjs/toolkit/query/react"
import { URL } from "../url"
import api from "./api"
import { API_ROUTES } from "./endpoints"

const QUERY_TAGS = {
	USERS: `users`,
	CATEGORY: `category`,
	COURSE: `course`,
	COUPON: `coupon`,
}

const axiosBaseQuery =
	({ baseUrl }) =>
	async ({ url, method, data, headers, params }) => {
		console.log(data)
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
	tagTypes: Object.values(QUERY_TAGS),
	refetchOnReconnect: true,
	refetchOnMountOrArgChange: true,
	baseQuery: axiosBaseQuery({
		baseUrl: URL,
	}),
	endpoints: builder => ({
		// Get Users
		getUsers: builder.query({
			query: () => ({
				url: API_ROUTES.GET_USERS,
				method: "GET",
			}),
			providesTags: [QUERY_TAGS.USERS],
		}),
		// Get Posts
		getPosts: builder.query({
			query: () => ({
				url: API_ROUTES.GET_POSTS,
				method: "GET",
			}),
			providesTags: [QUERY_TAGS.CATEGORY],
		}),
		// Get Categories
		getCategories: builder.query({
			query: () => ({
				url: API_ROUTES.GET_CATEGORIES,
				method: "GET",
			}),
			providesTags: [QUERY_TAGS.CATEGORY],
		}),
		// Get Category
		getCategory: builder.query({
			query: name => ({
				url: `${API_ROUTES.GET_CATEGORY}/${name}`,
				method: "GET",
			}),
			providesTags: [QUERY_TAGS.CATEGORY],
		}),
		// Get Coupons
		getCoupons: builder.query({
			query: () => ({
				url: API_ROUTES.GET_COUPONS,
				method: "GET",
			}),
			providesTags: [QUERY_TAGS.COUPON],
		}),
		//Create Admin
		createAdmin: builder.mutation({
			query: (name, email, password) => ({
				url: API_ROUTES.CREATE_ADMIN,
				method: "POST",
				data: ({name, email, password})
			})
		}),
		//Login
		login: builder.mutation({
			query: ({email, password}) => ({
				url: API_ROUTES.LOGIN,
				method: "POST",
				data: ({email, password}),
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

export const { useGetUsersQuery, useGetPostsQuery, useGetCategoriesQuery, useGetCouponsQuery, useLoginMutation, useCreateAdminMutation } = apiHandler
