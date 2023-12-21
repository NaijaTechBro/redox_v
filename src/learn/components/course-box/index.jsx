import PropTypes from "prop-types"
import { ContinueCourseBox } from "./components/ContinueCourseBox"

const CourseBox = ({ type }) => {
	switch (type) {
		case `continue`:
			return <ContinueCourseBox />
		case `recomended`:
			return <>recomended</>
	}
}

CourseBox.propTypes = {
	type: PropTypes.string,
}

export { CourseBox }
