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

export default Layout
