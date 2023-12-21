import { CourseBox } from "../../course-box"

const RecomendedCourseLayout = () => {
	return (
		<div className="course__layout">
			<h2 className="course__layout--heading--2">Recomended For You</h2>
			<p className="course__layout--sub">Are you ready for your next lesson?</p>
			<div className="course__layout--grid">
				<CourseBox type="recomended" />
				<CourseBox type="recomended" />
				<CourseBox type="recomended" />
			</div>
		</div>
	)
}

export { RecomendedCourseLayout }
