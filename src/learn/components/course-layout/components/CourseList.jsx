import PropTypes from "prop-types"
import { BiChevronLeft, BiChevronRight } from "react-icons/bi"
import { CourseBox } from "../../course-box"

const CourseList = ({ title }) => {
	return (
		<div className="course__layout">
			<h2 className="course__layout--heading--1">{title}</h2>
			<div className="course__layout--grid">
				{[0, 1, 2, 3, 4, 5].map(data => (
					<CourseBox
						type="recomended"
						key={data}
					/>
				))}
			</div>
			<div className="course__layout--pagination">
				<div className="flex">
					<button className="pagination__btn">
						<BiChevronLeft className="pagination__btn--icon" />
					</button>
					<button className="pagination__btn">
						<BiChevronRight className="pagination__btn--icon" />
					</button>
				</div>
				<p className="course__layout--pagination__text">1-6 of 15 Courses</p>
			</div>
		</div>
	)
}

CourseList.propTypes = {
	type: PropTypes.string,
	title: PropTypes.string,
}

export { CourseList }
