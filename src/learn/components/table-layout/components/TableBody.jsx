import PropTypes from "prop-types"
import { TableData } from "./TableData"

const TableBody = ({ data }) => {
	return (
		<tbody className="layout__table--body">
			{data.map((item, idx) => (
				<tr
					key={idx}
					className="layout__table--row">
					{item.map((list, i) => (
						<TableData
							key={i}
							data={list}
							last={i === item.length - 1}
						/>
					))}
				</tr>
			))}
		</tbody>
	)
}

TableBody.propTypes = {
	data: PropTypes.array,
}

export { TableBody }
