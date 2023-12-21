import { AiFillStar } from "react-icons/ai"
const CourseBoxRating = () => {
	return (
		<div className="flex rating">
			<AiFillStar className="rating__star" />
			<AiFillStar className="rating__star" />
			<AiFillStar className="rating__star" />
			<AiFillStar className="rating__star" />
			<AiFillStar className="rating__star" />
			<span className="rating__text">4/5</span>
		</div>
	)
}

export { CourseBoxRating }
