import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { persistReducer, persistStore } from "redux-persist"
import storage from "redux-persist/lib/storage"

export const makeStore = () => {
	// persist config
	const persistConfig = {
		key: "redox-store",
		storage,
	}

	// TODO => combine reducers
	const rootReducer = combineReducers({
		// [apiHandler.reducerPath]: apiHandler.reducer,
		// [authSlice.name]: authSlice.reducer,
		// [globalSlice.name]: globalSlice.reducer,
	})

	// persist reducer
	const persistedReducer = persistReducer(persistConfig, rootReducer)

	// configure store
	const store = configureStore({
		reducer: persistedReducer,
	})

	// persist store
	const persistor = persistStore(store)

	// return store and persistor
	return { store, persistor }
}
