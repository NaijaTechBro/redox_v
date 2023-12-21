import PropTypes from "prop-types"
import { HomeHero } from "./components/HomeHero"

const Hero = ({ type }) => {
	switch (type) {
		case `home`:
			return <HomeHero />
		case `course`:
			return <>Course</>
	}
}

Hero.propTypes = {
	type: PropTypes.string,
}

export default Hero
