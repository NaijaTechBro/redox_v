import { createAction, createSlice } from "@reduxjs/toolkit"
import { apiHandler } from "../../service/apiHandler"

const hydrate = createAction(`__REDUX_WRAPPER_HYDRATE__`)

const initialState = {
	user: null,
	token: null,
}

export const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(hydrate, (state, action) => {
				return {
					...state,
					...action?.payload?.auth,
				}
			})
			.addMatcher(apiHandler.endpoints.login.matchFulfilled, (state, action) => {
				const { token } = action?.payload ?? ``
				state.token = token
				localStorage.setItem(`t`, token)
			})
	},
})
