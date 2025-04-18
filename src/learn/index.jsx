import { Route, Routes } from "react-router-dom"
import Layout from "./components/layout"
import { Coupons, Course, Courses, History, Home, MyCourses, Wishlist, Posts, Categories } from "./pages"
import "./styles/styles.scss"

const Learn = () => {
	const routeComponents = [
		{ path: `/`, element: <Home /> },
		{ path: `/courses`, element: <Courses /> },
		{ path: `/my-courses`, element: <MyCourses /> },
		{ path: `/course/:title`, element: <Course /> },
		{ path: `/wishlist`, element: <Wishlist /> },
		{ path: `/coupons`, element: <Coupons /> },
		{ path: `/history`, element: <History /> },
		{ path: `/posts`, element: <Posts /> },
		{ path: `/categories`, element: <Categories /> },
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
