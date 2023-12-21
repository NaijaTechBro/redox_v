import Slider from "react-slick"
import "slick-carousel/slick/slick-theme.css"
import "slick-carousel/slick/slick.css"
import { CourseBox } from "../../course-box"

const settings = {
	dots: false,
	arrows: false,
	infinite: true,
	speed: 500,
	autoplay: true,
	autoplaySpeed: 5000,
	slidesToShow: 5,
	slidesToScroll: 2,
	initialSlide: 0,
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 3,
			},
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			},
		},
	],
}

const ContinueCourseLayout = () => {
	return (
		<div className="course__layout">
			<h3 className="course__layout--heading--1">Continue watching</h3>
			<Slider {...settings}>
				<CourseBox type="continue" />
				<div></div>
				<CourseBox type="continue" />
				<div></div>
				<CourseBox type="continue" />
				<div></div>
				<CourseBox type="continue" />
				<div></div>
			</Slider>
		</div>
	)
}

export { ContinueCourseLayout }
