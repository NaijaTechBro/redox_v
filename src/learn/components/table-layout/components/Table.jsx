import PropTypes from "prop-types"
import { TableBody } from "./TableBody"
import { TableHead } from "./TableHead"

const Table = ({ data }) => {
	return (
		<table className="layout__table">
			<TableHead data={data.thead} />
			<TableBody data={data.tbody} />
		</table>
	)
}

Table.propTypes = {
	data: PropTypes.object,
}

export default Table
