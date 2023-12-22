import PropTypes from "prop-types"
import { ContinueCourseLayout } from "./components/ContinueCourseLayout"
import { CourseList } from "./components/CourseList"
import { RecomendedCourseLayout } from "./components/RecomendedCourseLayout"

const CourseLayout = ({ type, title }) => {
	switch (type) {
		case `continue`:
			return <ContinueCourseLayout />
		case `recomended`:
			return <RecomendedCourseLayout />
		case `list`:
			return <CourseList title={title} />
	}
}

CourseLayout.propTypes = {
	type: PropTypes.string,
	title: PropTypes.string,
}

export default CourseLayout
