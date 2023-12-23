import { AiFillStar, AiOutlineStar } from "react-icons/ai"
const CourseHeroRating = () => {
	return (
		<div className="flex rating">
			<span className="rating__text">4.0</span>
			<AiFillStar className="rating__star" />
			<AiFillStar className="rating__star" />
			<AiFillStar className="rating__star" />
			<AiFillStar className="rating__star" />
			<AiOutlineStar className="rating__star outlined" />
			<span className="rating__text">(287 ratings)</span>
		</div>
	)
}

export { CourseHeroRating }
