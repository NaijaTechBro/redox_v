import PropTypes from "prop-types"
import { CourseHero } from "./components/CourseHero"
import { HomeHero } from "./components/HomeHero"

const Hero = ({ type }) => {
	switch (type) {
		case `home`:
			return <HomeHero />
		case `course`:
			return <CourseHero />
	}
}

Hero.propTypes = {
	type: PropTypes.string,
}

export default Hero
