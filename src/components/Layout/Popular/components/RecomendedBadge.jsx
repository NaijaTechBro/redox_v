import { Link } from "react-router-dom"

const RecomendedBadge = ({ text }) => {
	return (
		<Link
			to={`/category/${text}`}
			className="recomended__badge">
			{text}
		</Link>
	)
}

export default RecomendedBadge
