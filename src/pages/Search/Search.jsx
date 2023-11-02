import { useParams } from "react-router-dom"
import Navbar from "../../components/Layout/Navbar/Navbar"
import Popular from "../../components/Layout/Popular/Popular"
import usePostContext from "../../context/post/usePostContext"
import { useEffect } from "react"

const Search = () => {
  const { postSearch, handleSearch } = usePostContext()
  const { name } = useParams()

  useEffect(() => {
    handleSearch(name)
  }, [name])

  return (
    <>
      <Navbar />
      <Popular posts={postSearch} type="search" />
    </>
  )
}

export default Search
