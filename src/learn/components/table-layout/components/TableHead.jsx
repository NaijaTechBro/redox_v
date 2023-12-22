import PropTypes from "prop-types"

const TableHead = ({ data }) => {
	return (
		<thead className="layout__table--head">
			<tr className="layout__table--row">
				{data.map((item, idx) => (
					<th key={idx}>{item}</th>
				))}
			</tr>
		</thead>
	)
}

TableHead.propTypes = {
	data: PropTypes.array,
}

export { TableHead }
