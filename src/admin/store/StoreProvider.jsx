import PropTypes from "prop-types"
import { useRef } from "react"
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"
import { makeStore } from "./store"

const StoreProvider = ({ children }) => {
	const storeRef = useRef()

	if (!storeRef.current) {
		// Create the store instance t he first time this renders
		storeRef.current = makeStore()
	}

	return (
		<Provider store={storeRef.current?.store}>
			<PersistGate persistor={storeRef.current?.persistor}>{children}</PersistGate>
		</Provider>
	)
}

StoreProvider.propTypes = {
	children: PropTypes.node,
}

export { StoreProvider }

