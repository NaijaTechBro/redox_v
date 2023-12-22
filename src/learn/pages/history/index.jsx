import { TableLayout } from "../../components/table-layout"

const History = () => {
	return (
		<div className="layout history__layout">
			<h2 className="heading--1">Payment History</h2>
			<TableLayout type="history" />
		</div>
	)
}

export default History
