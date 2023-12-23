// src/Admin/App.jsx
import { useState } from "react"
import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Layout/Navbar/Navbar"
import Sidebar from "./components/Sidebar/Sidebar"

// PAGES
import "./App.css"
import NotFound from "./components/Error/NotFound"
import Activities from "./pages/Activities/Activities"
import AllAdmin from "./pages/AllAdmin/AllAdmin"
import AllUsers from "./pages/AllUsers/AllUsers"
import ForgotPassword from "./pages/Auth/ForgotPasswordAdmin"
import Login from "./pages/Auth/LoginAdmin"
import Register from "./pages/Auth/RegisterAdmin"
import ResetPassword from "./pages/Auth/ResetPasswordAdmin"
import Categories from "./pages/Categories/Categories"
import Coupons from "./pages/Coupons/Coupons"
import Courses from "./pages/Courses/Courses"
import Dashboard from "./pages/Dashboard/Dashboard"
import PaymentHistory from "./pages/PaymentHistory/PaymentHistory"
import Posts from "./pages/Posts/Posts"
import Settings from "./pages/Settings/Settings"

const App = () => {
	const [sideMenuOpen, setSideMenuOpen] = useState(false)

	return (
		<>
			{/* <BrowserRouter> */}
			<Navbar
				sideMenuOpen={sideMenuOpen}
				setSideMenuOpen={setSideMenuOpen}
			/>
			<div className="admin--layout--div">
				<Sidebar
					sideMenuOpen={sideMenuOpen}
					setSideMenuOpen={setSideMenuOpen}
				/>
				<Routes>
					<Route
						path="/"
						element={<Dashboard sideMenuOpen={sideMenuOpen} />}
					/>
					<Route
						path="/activities"
						element={<Activities sideMenuOpen={sideMenuOpen} />}
					/>
					<Route
						path="/alladmins"
						element={<AllAdmin sideMenuOpen={sideMenuOpen} />}
					/>
					<Route
						path="/allusers"
						element={<AllUsers sideMenuOpen={sideMenuOpen} />}
					/>
					<Route
						path="/posts"
						element={<Posts sideMenuOpen={sideMenuOpen} />}
					/>
					<Route
						path="/categories"
						element={<Categories sideMenuOpen={sideMenuOpen} />}
					/>
					<Route
						path="/coupons"
						element={<Coupons sideMenuOpen={sideMenuOpen} />}
					/>
					<Route
						path="/courses"
						element={<Courses sideMenuOpen={sideMenuOpen} />}
					/>
					<Route
						path="/paymenthistory"
						element={<PaymentHistory sideMenuOpen={sideMenuOpen} />}
					/>
					<Route
						path="/settings"
						element={<Settings sideMenuOpen={sideMenuOpen} />}
					/>
					<Route
						path="/login"
						element={<Login sideMenuOpen={sideMenuOpen} />}
					/>
					<Route
						path="/cyprus"
						element={<Register sideMenuOpen={sideMenuOpen} />}
					/>
					<Route
						path="/forgotpassword"
						element={<ForgotPassword sideMenuOpen={sideMenuOpen} />}
					/>
					<Route
						path="/resetpassword"
						element={<ResetPassword sideMenuOpen={sideMenuOpen} />}
					/>
					<Route
						path="/*"
						element={<NotFound sideMenuOpen={sideMenuOpen} />}
					/>
				</Routes>
			</div>
			{/* <Footer/> */}
			{/* </BrowserRouter> */}
		</>
	)
}

export default App
