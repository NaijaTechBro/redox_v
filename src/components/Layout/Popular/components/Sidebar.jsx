import Reading from "./Reading"
import Recomended from "./Recomended"
import Search from "./Search"

const Sidebar = () => {
  return (
    <div className="popular__sidebar">
      <Search />
      <Reading />
      <Recomended />
    </div>
  )
}

export default Sidebar
