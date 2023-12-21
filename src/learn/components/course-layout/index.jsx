import PropTypes from "prop-types"
import { ContinueCourseLayout } from "./components/ContinueCourseLayout"
import { RecomendedCourseLayout } from "./components/RecomendedCourseLayout"

const CourseLayout = ({ type }) => {
	switch (type) {
		case `continue`:
			return <ContinueCourseLayout />
		case `recomended`:
			return <RecomendedCourseLayout />
	}
}

CourseLayout.propTypes = {
	type: PropTypes.string,
}

export default CourseLayout
