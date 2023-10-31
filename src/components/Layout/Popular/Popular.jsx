import PopularBoxes from "./components/PopularBoxes"
import Sidebar from "./components/Sidebar"
import "./popular.scss"

const Popular = () => {
  return (
    <section className="popular section">
      <div className="container">
        <h3 className="section--title">Popular this Week</h3>
        <div className="popular--grid">
          <PopularBoxes />
          <Sidebar />
        </div>
      </div>
    </section>
  )
}

export default Popular
