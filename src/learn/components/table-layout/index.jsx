import PropTypes from "prop-types"
import { HistoryTable } from "./components/HistoryTable"

const TableLayout = ({ type }) => {
	switch (type) {
		case `history`:
			return <HistoryTable />
		case `wishlist`:
			return <>Wishlist</>
	}
}

TableLayout.propTypes = {
	type: PropTypes.string,
}

export { TableLayout }
