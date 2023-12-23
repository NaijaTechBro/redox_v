import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { persistReducer, persistStore } from "redux-persist"
import storage from "redux-persist/lib/storage"
import { rootSlice } from "./slices/root.slice"

// setup store
export const makeStore = () => {
	// persist config
	const persistConfig = {
		key: "redox-store",
		storage,
	}

	// combine reducers
	const rootReducer = combineReducers({
		[rootSlice.name]: rootSlice.reducer,
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
