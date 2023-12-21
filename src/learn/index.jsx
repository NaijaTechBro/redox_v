import { Route, Routes } from "react-router-dom"
import Layout from "./components/layout"
import { Coupons, Course, Courses, History, Home, Wishlist } from "./pages"
import "./styles/styles.scss"

const Learn = () => {
	const routeComponents = [
		{ path: `/`, element: <Home /> },
		{ path: `/courses`, element: <Courses /> },
		{ path: `/course/:title`, element: <Course /> },
		{ path: `/wishlist`, element: <Wishlist /> },
		{ path: `/coupons`, element: <Coupons /> },
		{ path: `/history`, element: <History /> },
	]

	return (
		<Layout>
			<Routes>
				{routeComponents.map(data => (
					<Route
						path={data.path}
						key={data.path}
						element={data.element}
					/>
				))}
			</Routes>
		</Layout>
	)
}

export default Learn
