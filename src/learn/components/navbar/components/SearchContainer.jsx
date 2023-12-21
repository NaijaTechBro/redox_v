import { useState } from "react"
import { BsSearch } from "react-icons/bs"
import { useNavigate } from "react-router-dom"
import { useTheme } from "../../../../context/ThemeContext"

const SearchContainer = () => {
	const navigate = useNavigate()
	const [prompt, setPrompt] = useState("")
	const [isOpen, setIsOpen] = useState("")
	const { darkMode } = useTheme()

	const handleSearchInput = e => {
		const postTitle = e.target.value
		setPrompt(postTitle)
	}

	const toggleIsOpen = () => setIsOpen(prev => !prev)

	return (
		<div className="header__search-container">
			<div className={`header__search-container--inner ${darkMode ? `dark_mode` : ``}`}>
				<input
					onChange={handleSearchInput}
					className="outline-none px-3"
					placeholder="Search for Courses, Skills and Videos"
					type="text"
				/>
				<span
					onClick={() => navigate(prompt ? `/search/${prompt}` : "/")}
					className="search--icon">
					<BsSearch />
				</span>
			</div>
			<div className="header__search-container--inner mobile--view">
				<span
					className="search--icon"
					onClick={toggleIsOpen}>
					<BsSearch />
				</span>
				{isOpen && (
					<div className="header__search-container--dropdown">
						<input
							onChange={handleSearchInput}
							className="outline-none px-3"
							placeholder="Search"
							type="text"
						/>
						<span
							onClick={() => navigate(prompt ? `/search/${prompt}` : "/")}
							className="search--icon">
							<BsSearch />
						</span>
					</div>
				)}
			</div>
		</div>
	)
}

export { SearchContainer }
