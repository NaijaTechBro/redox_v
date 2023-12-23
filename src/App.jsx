import { BrowserRouter, Route, Routes } from "react-router-dom"
import "../src/scss/App.scss"

import { UserContextProvider } from "./context/UserContext"
import Login from "./pages/Auth/Login"
import Register from "./pages/Auth/Register"
import Blog from "./pages/Blog/Blog"
import MyBlogs from "./pages/Blog/MyBlogs"
import CreatePost from "./pages/Post2/CreatePost"
import PostDetails from "./pages/Post2/Details/PostDetails"
import EditPost from "./pages/Post2/EditPost"
import Profile from "./pages/User/Profile/Profile"
// import Imageupload from './pages/Post/Imageupload'
import { ThemeProvider } from "./context/ThemeContext"

// LayOut
import NotFound from "./components/Error/NotFound"
import Category from "./pages/Category/Category"
import Home from "./pages/Home/Home"

// Company
import PostProvider from "./context/post/PostProvider"
import ForgotPassword from "./pages/Auth/ForgotPassword"
import ResetPassword from "./pages/Auth/ResetPassword"
import AboutUs from "./pages/Company/About/About"
import Community from "./pages/Company/Community/Community"
import Contact from "./pages/Company/Contact/Contact"
import Fresources from "./pages/Fresources/Fresources"
import Search from "./pages/Search/Search"
import EditProfile from "./pages/User/Profile/EditProfile"

import Admin from "./admin/App"
import Learn from "./learn"
import { StoreProvider } from "./store/StoreProvider"

const App = () => {
	return (
		<StoreProvider>
			<ThemeProvider>
				<UserContextProvider>
					<BrowserRouter>
						<PostProvider>
							<Routes>
								<Route
									path="/admin/*"
									element={<Admin />}
								/>
								<Route
									path="/learn/*"
									element={<Learn />}
								/>
								<Route
									path="/"
									element={<Home />}
								/>
								<Route
									path="/search/:name"
									element={<Search />}
								/>
								<Route
									path="/category/:category"
									element={<Category />}
								/>
								<Route
									path="/blog"
									element={<Blog />}
								/>
								{/* Company */}
								<Route
									path="/company/about-us"
									element={<AboutUs />}
								/>
								<Route
									path="/company/contact"
									element={<Contact />}
								/>
								<Route
									path="/community"
									element={<Community />}
								/>
								<Route
									exact
									path="/login"
									element={<Login />}
								/>
								<Route
									exact
									path="/register"
									element={<Register />}
								/>
								<Route
									exact
									path="/forgotPassword"
									element={<ForgotPassword />}
								/>
								<Route
									exact
									path="/resetPassword"
									element={<ResetPassword />}
								/>
								<Route
									exact
									path="/write"
									element={<CreatePost />}
								/>
								<Route
									exact
									path="/edit/:id"
									element={<EditPost />}
								/>
								<Route
									exact
									path="/myblogs/:id"
									element={<MyBlogs />}
								/>
								<Route
									exact
									path="/profile/:usertag"
									element={<Profile />}
								/>
								<Route
									exact
									path="/profile/edit/:currentUser"
									element={<EditProfile />}
								/>
								<Route
									exact
									path="/trading-tools"
									element={<Fresources />}
								/>
								<Route
									exact
									path="/:title"
									element={<PostDetails />}
								/>
								{/* <Route path='/image-upload' element={<Imageupload />} /> */}
								<Route
									path="/*"
									element={<NotFound />}
								/>
							</Routes>
						</PostProvider>
					</BrowserRouter>
				</UserContextProvider>
			</ThemeProvider>
		</StoreProvider>
	)
}

export default App
