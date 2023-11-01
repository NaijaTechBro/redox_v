import { useState } from "react"
import { BsSearch } from "react-icons/bs"
import { useNavigate } from "react-router-dom"

const SearchContainer = () => {
  const navigate = useNavigate()
  const [prompt, setPrompt] = useState("")

  return (
    <div className="header__search-container">
      <div className="header__search-container--inner">
        <input onChange={(e) => setPrompt(e.target.value)} className="outline-none px-3 " placeholder="Search" type="text" />
        <p onClick={() => navigate(prompt ? "?search=" + prompt : navigate("/"))} className="search--icon">
          <BsSearch />
        </p>
      </div>
    </div>
  )
}

export default SearchContainer
