import { BiPlay } from "react-icons/bi"
import { Link } from "react-router-dom"
import adBg from "../../../assets/hero-banner.png"

const HomeHeroAd = () => {
	return (
		<div className="hero__home--ad">
			<div className="hero__home--ad__bg">
				<img
					src={adBg}
					alt="Ad Banner"
				/>
			</div>
			<div className="hero__home--ad__content">
				<h4 className="hero__home--ad__sub">Online Course</h4>
				<h2 className="hero__home--ad__heading">
					Sharpen Your Skills With <br /> Professional Online Finance Courses
				</h2>
				<Link
					to="/learn/courses"
					className="hero__home--ad__btn">
					Start Now{" "}
					<span className="hero__home--ad__btn--icon">
						<BiPlay />
					</span>
				</Link>
			</div>
		</div>
	)
}

export { HomeHeroAd }
