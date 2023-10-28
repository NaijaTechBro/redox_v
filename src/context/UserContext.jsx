/* eslint-disable react/prop-types */

import axios from "axios"
import { createContext, useEffect, useState } from "react"
import { URL } from "../url"

export const UserContext = createContext({})

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(null)

  useEffect(() => {
    getUser()
  }, [])

  const getUser = async () => {
    try {
      await axios.get(URL + "/api/auth/refetch", { withCredentials: true }).then((res) => {
        setUser(res.data.user)
      })
    } catch (err) {
      console.log(err)
    }
  }

  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>
}
