import { Link } from "react-router-dom"
import logo from "../../../assets/logor.png"
import mobileLogo from "../../../assets/x.png"
import DropDowns from "../../../components/Layout/Navbar/Component/DropDowns"
import { useTheme } from "../../../context/ThemeContext"
import { SearchContainer } from "./components/SearchContainer"

const Navbar = () => {
	const { darkMode } = useTheme()

	return (
		<header className={`header ${darkMode ? `dark_mode` : ``}`}>
			<div className="container">
				<div className="header__logo">
					<Link to="/">
						<img
							src={logo}
							alt="Redox"
							className="mobile--hidden"
						/>
						<img
							src={mobileLogo}
							alt="Redox"
							className="desktop--hidden"
						/>
					</Link>
				</div>
				<SearchContainer />
				<DropDowns />
			</div>
		</header>
	)
}

export default Navbar
