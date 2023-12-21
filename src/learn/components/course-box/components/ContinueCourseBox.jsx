import courseImg from "../../../assets/course-continue.png"
import courseProfileImg from "../../../assets/course-profile.png"

const ContinueCourseBox = () => {
	return (
		<div className="course__box--space">
			<div className="course__box--continue">
				<div className="course__box--continue__img">
					<img
						src={courseImg}
						alt="Course Title"
					/>
				</div>
				<div className="course__box--continue__info">
					<span className="course__box--continue__category">Frontend</span>
					<h3 className="course__box--continue__heading">Beginner’s Guide to becoming a professional frontend developer</h3>
					<div className="course__box--continue__progress">
						<div
							className="course__box--continue__progress--line"
							style={{ width: `70%` }}></div>
					</div>
					<div className="course__box--continue__profile">
						<div className="course__box--continue__profile--img">
							<img
								src={courseProfileImg}
								alt="Profile"
							/>
						</div>
						<div className="course__box--continue__profile--info">
							<h4 className="course__box--continue__profile--name">Prashant Kumar singh</h4>
							<p className="course__box--continue__profile--role">software Developer</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export { ContinueCourseBox }
