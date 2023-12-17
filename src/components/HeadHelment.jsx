import { Helmet } from "react-helmet"
import { getBriefStr } from "../helpers"

const HeadHelment = ({ title, image, desc }) => {
	return (
		<Helmet>
			<title>{title}</title>
			<meta
				property="og:title"
				content={title}
			/>
			<meta
				property="og:image"
				content={image}
			/>
			<meta
				property="og:description"
				content={getBriefStr(`${desc}`, 20)}
			/>
		</Helmet>
	)
}

export default HeadHelment
