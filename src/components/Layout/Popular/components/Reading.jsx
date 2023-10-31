import { Link } from "react-router-dom"
import ReadingBox from "./ReadingBox"

const Reading = () => {
  return (
    <div className="popular__reading">
      <h4 className="popular__reading--heading">What We’re Reading Today</h4>
      <ReadingBox />
      <ReadingBox />
      <ReadingBox />
      <div>
        <Link to="#" className="popular__reading--more">
          See the full list
        </Link>
      </div>
    </div>
  )
}

export default Reading
