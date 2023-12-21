import PropTypes from "prop-types"
import { ContinueCourseLayout } from "./components/ContinueCourseLayout"

const CourseLayout = ({ type }) => {
	switch (type) {
		case `continue`:
			return <ContinueCourseLayout />
		case `recomended`:
			return <>recomended</>
	}
}

CourseLayout.propTypes = {
	type: PropTypes.string,
}

export { CourseLayout }
