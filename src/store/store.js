import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { persistReducer, persistStore } from "redux-persist"
import storage from "redux-persist/lib/storage"
// import thunkMiddleware from "redux-thunk"
import logger from "redux-logger"
import { apiHandler } from "../service/apiHandler"
import { rootSlice } from "./slices/root.slice"

// setup store
export const makeStore = () => {
	// persist config
	const persistConfig = {
		key: "redox-store",
		storage,
		blacklist: [apiHandler.reducerPath],
	}

	// combine reducers
	const rootReducer = combineReducers({
		[apiHandler.reducerPath]: apiHandler.reducer,
		[rootSlice.name]: rootSlice.reducer,
	})

	// persist reducer
	const persistedReducer = persistReducer(persistConfig, rootReducer)

	// configure store
	const store = configureStore({
		reducer: persistedReducer,
		// middleware: [apiHandler.middleware],
		middleware: getDefaultMiddleware =>
			getDefaultMiddleware()
				.prepend(
					// correctly typed middlewares can just be used
					apiHandler.middleware,
				)
				// prepend and concat calls can be chained
				.concat(logger),
	})

	// console.log(store.getState())

	// persist store
	const persistor = persistStore(store)

	// return store and persistor
	return { store, persistor }
}
