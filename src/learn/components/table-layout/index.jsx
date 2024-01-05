import PropTypes from "prop-types"
import { HistoryTable } from "./components/HistoryTable"
import { WishlistTable } from "./components/WishlistTable"

const TableLayout = ({ type }) => {
	switch (type) {
		case `history`:
			return <HistoryTable />
		case `wishlist`:
			return <WishlistTable/>
	}
}

TableLayout.propTypes = {
	type: PropTypes.string,
}

export { TableLayout }
