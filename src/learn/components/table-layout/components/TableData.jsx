import PropTypes from "prop-types"
import { useCurrency } from "../../../../hooks/useCurrency"

const TableData = ({ data, last }) => {
	const [price] = useCurrency(Number(data), `en-NG`, `NGN`)

	return <td>{!price.includes(`NaN`) ? price : !last ? data : <button>{data}</button>}</td>
}

TableData.propTypes = {
	data: PropTypes.array,
	last: PropTypes.bool,
}

export { TableData }
