import Table from "./Table"

const HistoryTable = () => {
	const data = {
		thead: ["Product Name", "Date", "Total Price", "Payment Type", "Receipt", "Invoice"],
		tbody: [
			[`The Unbundled University`, `January14, 2020`, 5000, `Offline Payment`, `Jacob Fisher`, `Download`],
			[`The Unbundled University`, `January14, 2020`, 5000, `Offline Payment`, `Jacob Fisher`, `Download`],
			[`The Unbundled University`, `January14, 2020`, 5000, `Offline Payment`, `Jacob Fisher`, `Download`],
			[`The Unbundled University`, `January14, 2020`, 5000, `Offline Payment`, `Jacob Fisher`, `Download`],
		],
	}

	return (
		<div>
			<Table data={data} />
		</div>
	)
}

export { HistoryTable }
