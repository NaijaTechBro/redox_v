import PropTypes from "prop-types"
import { ContinueCourseBox } from "./components/ContinueCourseBox"
import { RecomendedCourseBox } from "./components/RecomendedCourseBox"

const CourseBox = ({ type }) => {
	switch (type) {
		case `continue`:
			return <ContinueCourseBox />
		case `recomended`:
			return <RecomendedCourseBox />
	}
}

CourseBox.propTypes = {
	type: PropTypes.string,
}

export { CourseBox }

