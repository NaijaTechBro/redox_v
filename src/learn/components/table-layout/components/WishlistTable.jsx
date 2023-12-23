import Table from "./Table"

const WishlistTable = () => {
	const data = {
		thead: ["", "", "Product", "Price", "Availability", ""],
		tbody: [
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

export { WishlistTable }
