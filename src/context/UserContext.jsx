/* eslint-disable react/prop-types */

import axios from "axios"
import { createContext, useEffect, useState } from "react"
import { URL } from "../url"

export const UserContext = createContext({})

export function UserContextProvider({children}){
    const [user,setUser]=useState(null)
    const [followers,setFollowers]=useState(null)
    const [following,setFollowing]=useState(null)

    useEffect(()=>{
      getUser()
      // getFollowers(user._id)
      // getFollowing(user._id)
    },[])

    const getUser=async()=>{
      try{
        const res=await axios.get(URL+"/api/auth/refetch",{withCredentials:true})
        // console.log(res.data)
        setUser(res.data)

      }
      catch(err){
        console.log(err)
      }
    }

    // const getFollowers=async(userId)=>{
    //   try{
    //     const res=await axios.post(URL+`/api/users/following/:${userId}`,{withCredentials:true})
    //     console.log(res.data)
    //     setFollowers(res.data)

    //   }
    //   catch(err){
    //     console.log(err)
    //   }
    // }

    // const getFollowing=async(userId)=>{
    //   try{
    //     const res=await axios.get(URL+`/api/users/following/:${userId}`,{withCredentials:true})
    //     console.log(res.data)
    //     setFollowing(res.data)

    //   }
    //   catch(err){
    //     console.log(err)
    //   }
    // }
    
    return (<UserContext.Provider value={{user,setUser,followers,setFollowers,following,setFollowing}}>
      {children}
    </UserContext.Provider>)
}
