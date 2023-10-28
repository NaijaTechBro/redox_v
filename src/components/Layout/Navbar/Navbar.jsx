import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom"
import axios from "axios"
import { URL } from  "../../../url"
import { UserContext } from "../../../context/UserContext"
import logo from "../../../assets/logor.png";
import { RiMenu4Fill } from "react-icons/ri";
import {BsSearch} from 'react-icons/bs'
import { VscClose } from "react-icons/vsc";
import '../../../scss/navbar.scss'
import Home from "./Component/Home";
import Product from "./Component/Product";
import Blog from "./Component/Blog";
import ProfileDropdown from "../../../pages/User/Profile/Menu/ProfileDropdown";
import Notification from "../../Notification/Notification"
import Contact from "./Component/Contact";

const Navbar = () => {

  const {setUser}=useContext(UserContext)

  const {search}=useLocation()
  // console.log(search)
  const [posts,setPosts]=useState([])
  const [noResults,setNoResults]=useState(false)
  const [loader,setLoader]=useState(false)
  const {user}=useContext(UserContext)
  // console.log(user)

  const [prompt,setPrompt]=useState("")
  const navigate=useNavigate()
  const path=useLocation().pathname

  const fetchPosts=async()=>{
    setLoader(true)
    try{
      const res=await axios.get(URL+"/api/posts/"+search)
      // console.log(res.data)
      setPosts(res.data)
      if(res.data.length===0){
        setNoResults(true)
      }
      else{
        setNoResults(false)
      }
      setLoader(false)
      
    }
    catch(err){
      console.log(err)
      setLoader(true)
    }
  }

  useEffect(()=>{
    fetchPosts()

  },[search])


  const [open, setOpen] = useState(false);


  const componentStyle = {
    backgroundColor: "#f39d6b",
    textDecoration: "none",
    border: "none",
    padding: "10px",
    borderRadius: "4px",
    cursor: "pointer",
  };


  const handleLogout=async()=>{
    try{
      const res=await axios.post(URL+"/api/auth/logout",{withCredentials:true})
      // console.log(res)
      setUser(null)
      navigate("/login")
  
    }
    catch(err){
      console.log(err)
    }
  }


  return (
    <>
    <div className="container">
      <div className="navbar">
        {(!user || (user === 'user not loggedIn')) &&
        <>
          <div className="navbar__logo">
          <a href="/"><img src={logo} alt="logo" /></a>
        </div>
        <ul className="navbar__links">
          <li className="navbar__links__link">
          <Home />
          </li>
          <li className="navbar__links__link">
            <Product />
          </li>
            {/* <li className="navbar__links__link">
            <About />
          </li> */}
          <li className="navbar__links__link">
            <Contact />
          </li>
          <li className="navbar__links__link">
            <Blog />
          </li>
        </ul>
          <div className="navbar__ctas">
            <a target="blank" href="/register">Get Started</a>
          </div>
          </>
          }

        {(user && (user !== 'user not loggedIn')) &&
        <>
        <div className="navbar__logo">
          <a href="/blog"><img src={logo} alt="logo" /></a>
        </div>
        <ul className="navbar__links">
        {path==="/blog" && <div className="search-bar">
    <input onChange={(e)=>setPrompt(e.target.value)} className="outline-none px-3 " placeholder="Search" type="text"/>
    <p onClick={()=>navigate(prompt?"?search="+prompt:navigate("/"))} className="cursor-pointer"><BsSearch/></p>
    </div>}
        </ul>
        <div className="navbar__ctas">
        <Link to="/write">Write</Link>
          <br/>
          <Notification />
          <br />
          <ProfileDropdown  />
          </div>
          </>
          }
        <div className="navbar__toggle">
          {open ? (
            <VscClose
              className="io"
              onClick={() => {
                setOpen(!open);
              }}
            />
          ) : (
            <RiMenu4Fill
              className="io"
              onClick={() => {
                setOpen(!open);
              }}
            />
            
          )}
        </div>
      </div>
      
      <div
        style={componentStyle}
        className={`navbar__mobile__menu  ${open ? "open" : ""}`}
      >
        {!user && 
          <>
        <ul className="navbar__mobile__menu__links">
          <li
            className="navbar__mobile__menu__links__link"
            onClick={() => {
              setOpen(false);
            }}
          >
            <Home />
          </li>
          <li
            className="navbar__mobile__menu__links__link"
            onClick={() => {
              setOpen(false);
            }}
          >
            <Product />
          </li>
          <li
            className="navbar__mobile__menu__links__link"
            onClick={() => {
              setOpen(false);
            }}
          >
            <Contact />
          </li>
          <li
            className="navbar__mobile__menu__links__link"
            onClick={() => {
              setOpen(false);
            }}
          >
            <Blog />
          </li>
        </ul>
            <div className="navbar__mobile__menu__ctas">
              <a target="blank" href="/register">Get Started</a>
            </div>
          </>
        }

        {user &&
        <>
        
        <ul className="navbar__mobile__menu__links">
          <li
            className="navbar__mobile__menu__links__link"
            onClick={() => {
              setOpen(false);
            }}
          >
            <Link to="/write" style={{color: "#ff5f00"}}>Write</Link>
          </li>
          <li
            className="navbar__mobile__menu__links__link"
            onClick={() => {
              setOpen(false);
            }}
          >
            <Link to={"/myblogs/"+user._id} style={{color: "#ff5f00"}}>My Story</Link>
          </li>
          <li
            className="navbar__mobile__menu__links__link"
            onClick={() => {
              setOpen(false);
            }}
          >
            <Link to={"/profile/"+user._id} style={{color: "#ff5f00"}}>Profile</Link>
          </li>
          <li
            className="navbar__mobile__menu__links__link"
            onClick={() => {
              setOpen(false);
            }}
          >
            <Link to={"/myblogs/"+user._id} style={{color: "#ff5f00"}}>Settings</Link>
          </li>
        </ul>
            <div className="navbar__mobile__menu__ctas">
              <a onClick={handleLogout}>Logout</a>
            </div>
        </>

        }
            
        </div>
      </div>
      </>
  );
};

export default Navbar;
