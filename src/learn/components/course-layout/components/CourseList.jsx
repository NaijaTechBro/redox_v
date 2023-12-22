import PropTypes from "prop-types"
import { useState } from "react"
import { BiChevronLeft, BiChevronRight, BiSearchAlt2 } from "react-icons/bi"
import { CourseBox } from "../../course-box"

const CourseList = ({ title }) => {
	const [searchActive, setSearchActive] = useState(false)

	const handleSearch = () => setSearchActive(prev => !prev)

	return (
		<div className="course__layout">
			<h2 className="course__layout--heading--1">{title}</h2>
			{title.toLowerCase() === `our courses` && (
				<div className="course__layout--cta">
					<div className="course__layout--cta__search course__layout--search flex">
						<div className={`course__layout--search__box flex ${searchActive ? `active` : ``}`}>
							{searchActive && (
								<input
									type="text"
									placeholder="Search for Courses"
									className="course__layout--search__box--input"
								/>
							)}
							<span
								className="course__layout--search__box--icon"
								onClick={handleSearch}>
								<BiSearchAlt2 />
							</span>
						</div>
						{!searchActive && <p className="course__layout--search__text">Search courses by author, title and categories.</p>}
					</div>
					<div className="course__layout--cta__filter course__layout--filter flex">
						<div className="course__layout--filter__box active">Recomended</div>
						<div className="course__layout--filter__box">Technicals</div>
						<div className="course__layout--filter__box">Crypto</div>
						<div className="course__layout--filter__box">Stocks</div>
						<div className="course__layout--filter__box">Accounting</div>
						<div className="course__layout--filter__box">Fundamentals</div>
						<div className="course__layout--filter__box">Finance</div>
					</div>
				</div>
			)}
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
