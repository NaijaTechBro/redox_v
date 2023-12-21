import { HomeHeroAd } from "./HomeHeroAd"
import { HomeHeroTop } from "./HomeHeroTop"

const HomeHero = () => {
	return (
		<section className="hero__home">
			<HomeHeroTop />
			<HomeHeroAd />
		</section>
	)
}

export { HomeHero }
