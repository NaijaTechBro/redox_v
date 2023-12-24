import { AiOutlineHeart } from "react-icons/ai"
import { BsFillCartFill } from "react-icons/bs"
import { Link } from "react-router-dom"
import { useCurrency } from "../../../../hooks/useCurrency"
import courseImg from "../../../assets/course-recomended.png"
import { CourseBoxRating } from "./CourseBoxRating"

const RecomendedCourseBox = () => {
	const [price] = useCurrency(Number(5000), `en-NG`, `NGN`)

	return (
		<Link
			to={`/learn/course/beginner-guide`}
			className="course__box--recomended">
			<div className="course__box--recomended__img">
				<img
					src={courseImg}
					alt="Course Title"
				/>
			</div>
			<div className="course__box--recomended__info">
				<h3 className="course__box--recomended__heading">Beginner’s Guide to becoming a professional frontend developer</h3>
				<div className="course__box--recomended__cta">
					<div className="course__box--recomended__rating">
						<CourseBoxRating />
					</div>
					<div className="course__box--recomended__price">{price}</div>
				</div>
				<div className="course__box--recomended__details">
					<div className="course__box--recomended__box">03 Lessons</div>
					<div className="course__box--recomended__box">120 Learners</div>
					<div className="course__box--recomended__box">
						<div className="flex">
							<span>
								<BsFillCartFill className="course__box--recomended__icon" />
							</span>
							<span className="heart">
								<AiOutlineHeart className="course__box--recomended__icon" />
							</span>
						</div>
					</div>
				</div>
			</div>
		</Link>
	)
}

export { RecomendedCourseBox }
