import PropTypes from "prop-types"
import Navbar from "../navbar"
import Sidebar from "../sidebar"

const Layout = ({ children }) => {
	return (
		<>
			<Navbar />
			<div className="learn__layout">
				<Sidebar />
				<div className="learn__layout--main">{children}</div>
			</div>
		</>
	)
}

Layout.propTypes = {
	children: PropTypes.node,
}

export default Layout
