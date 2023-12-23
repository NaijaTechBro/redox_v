import { CourseHeroContent } from "./CourseHeroContent"
import { CourseHeroOverlay } from "./CourseHeroOverlay"

const CourseHero = () => {
	return (
		<section className="hero__course">
			<CourseHeroOverlay />
			<CourseHeroContent />
		</section>
	)
}

export { CourseHero }
