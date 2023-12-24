import { createSlice } from "@reduxjs/toolkit"

const initialState = {
	categories: [],
}

export const rootSlice = createSlice({
	name: "root",
	initialState,
	reducers: {},
})
