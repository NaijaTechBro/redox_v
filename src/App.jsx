import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "../src/scss/App.scss"

import Blog from "./pages/Blog/Blog"
import Login from "./pages/Auth/Login"
import Register from "./pages/Auth/Register"
import PostDetails from "./pages/Post2/Details/PostDetails"
import CreatePost from "./pages/Post2/CreatePost"
import EditPost from "./pages/Post2/EditPost"
import Profile from "./pages/User/Profile/Profile"
import { UserContextProvider } from "./context/UserContext"
import MyBlogs from "./pages/Blog/MyBlogs"
// import Imageupload from './pages/Post/Imageupload'
import { ThemeProvider } from "./context/ThemeContext"

// LayOut
import Home from "./pages/Home/Home"
import NotFound from "./components/Error/NotFound"

// Company
import AboutUs from "./pages/Company/About/About"
import Contact from "./pages/Company/Contact/Contact"
import Community from "./pages/Company/Community/Community"
import ForgotPassword from "./pages/Auth/ForgotPassword"
import Fresources from "./pages/Fresources/Fresources"
import PostProvider from "./context/post/PostProvider"
import Search from "./pages/Search/Search"

const App = () => {
  return (
    <>
    <ThemeProvider>
      <UserContextProvider>
        <BrowserRouter>
          <PostProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/search/:name" element={<Search />} />
              <Route path="/blog" element={<Blog />} />
              {/* Company */}
              <Route path="/company/about-us" element={<AboutUs />} />
              <Route path="/company-contact" element={<Contact />} />
              <Route path="/community" element={<Community />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/register" element={<Register />} />
              <Route exact path="/forgotPassword" element={<ForgotPassword />} />
              <Route exact path="/write" element={<CreatePost />} />
              <Route exact path="/posts/post/:id" element={<PostDetails />} />
              <Route exact path="/edit/:id" element={<EditPost />} />
              <Route exact path="/myblogs/:id" element={<MyBlogs />} />
              <Route exact path="/profile/:id" element={<Profile />} />
              <Route exact path="/trading-tools" element={<Fresources />} />
              {/* <Route path='/image-upload' element={<Imageupload />} /> */}
              <Route path="/*" element={<NotFound />} />
            </Routes>
          </PostProvider>
        </BrowserRouter>
      </UserContextProvider>
      </ThemeProvider>
    </>
  )
}

export default App
