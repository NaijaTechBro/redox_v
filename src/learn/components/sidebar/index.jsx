import { AiFillHome } from "react-icons/ai"
import { BiUserCircle } from "react-icons/bi"
import { BsBriefcaseFill, BsPencilSquare, BsReceipt } from "react-icons/bs"
import { TbUsers } from "react-icons/tb"
import { NavLink } from "react-router-dom"
import { useTheme } from "../../../context/ThemeContext"

const Sidebar = () => {
	const { darkMode } = useTheme()

	return (
		<aside className={`learn__layout--sidebar ${darkMode ? `dark_mode` : ``}`}>
			<div className="sidebar">
				<NavLink
					to="/learn"
					exact
					end
					className="sidebar--link"
					activeClassName="active">
					<span className="sidebar__icon--box">
						<AiFillHome className="sidebar__icon--box__icon" />
					</span>
					Home
				</NavLink>
			</div>
			<div className="sidebar">
				<h3 className="sidebar--heading">Account</h3>
				<NavLink
					to="/learn/my-courses"
					exact
					end
					className="sidebar--link"
					activeClassName="active">
					<span className="sidebar__icon--box">
						<BiUserCircle className="sidebar__icon--box__icon" />
					</span>
					My Courses
				</NavLink>
				<NavLink
					to="/learn/wishlist"
					exact
					end
					className="sidebar--link"
					activeClassName="active">
					<span className="sidebar__icon--box">
						<TbUsers className="sidebar__icon--box__icon" />
					</span>
					Wishlist
				</NavLink>
				<NavLink
					to="/learn/activities"
					exact
					end
					className="sidebar--link"
					activeClassName="active">
					<span className="sidebar__icon--box">
						<BsBriefcaseFill className="sidebar__icon--box__icon" />
					</span>
					Activities
				</NavLink>
			</div>
			<div className="sidebar">
				<h3 className="sidebar--heading">Market</h3>
				<NavLink
					to="/learn/coupons"
					exact
					end
					className="sidebar--link"
					activeClassName="active">
					<span className="sidebar__icon--box">
						<BsReceipt className="sidebar__icon--box__icon" />
					</span>
					Coupons
				</NavLink>
				<NavLink
					to="/learn/history"
					exact
					end
					className="sidebar--link"
					activeClassName="active">
					<span className="sidebar__icon--box">
						<BsPencilSquare className="sidebar__icon--box__icon" />
					</span>
					History
				</NavLink>
			</div>
		</aside>
	)
}

export default Sidebar
