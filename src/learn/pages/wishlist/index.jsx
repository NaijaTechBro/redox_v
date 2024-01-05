import { TableLayout } from "../../components/table-layout"
import { BiChevronLeft, BiChevronRight } from "react-icons/bi"

const Wishlist = () => {
	return (<>
		<div className="layout history__layout">
			<h2 className="heading--1">WishList</h2>
			<TableLayout type="wishlist" />
		</div>
		<div className="course__layout--pagination">
			<div className="flex">
				<button className="pagination__btn">
					<BiChevronLeft className="pagination__btn--icon" />
				</button>
				<button className="pagination__btn">
					<BiChevronRight className="pagination__btn--icon" />
				</button>
			</div>
			<p className="course__layout--pagination__text">1-6 of 15 Courses</p>
		</div>
	</>)
}

export default Wishlist
