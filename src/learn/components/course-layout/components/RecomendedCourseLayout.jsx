import { CourseBox } from "../../course-box"

const RecomendedCourseLayout = () => {
	return (
		<div className="course__layout">
			<h2 className="course__layout--heading--2">Recomended For You</h2>
			<p className="course__layout--sub">Are you ready for your next lesson?</p>
			<div className="course__layout--grid">
				{[0, 1, 2, 3, 4, 5].map(data => (
					<CourseBox
						type="recomended"
						key={data}
					/>
				))}
			</div>
		</div>
	)
}

export { RecomendedCourseLayout }
