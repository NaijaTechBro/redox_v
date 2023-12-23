import { AiOutlineHeart } from "react-icons/ai"
import { FaShare } from "react-icons/fa"
import { CourseHeroRating } from "./CourseHeroRating"

const CourseHeroContent = () => {
	return (
		<div className="hero__course--content">
			<h4 className="hero__course--content__sub">Course Details</h4>
			<h2 className="hero__course--content__heading">Build a Blockchain and a Cryptocurrency from Scratch</h2>
			<CourseHeroRating />
			<div className="flex">
				<button className="hero__course--content__btn">
					Wishlist
					<span className="hero__course--content__btn--icon">
						<AiOutlineHeart />
					</span>
				</button>
				<button className="hero__course--content__btn">
					Share
					<span className="hero__course--content__btn--icon">
						<FaShare />
					</span>
				</button>
			</div>
		</div>
	)
}

export { CourseHeroContent }
