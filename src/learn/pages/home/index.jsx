import { CourseLayout, Hero } from "../../components"

const Home = () => {
	return (
		<>
			<Hero type="home" />
			<CourseLayout type="continue" />
			<CourseLayout type="recomended" />
		</>
	)
}

export default Home
