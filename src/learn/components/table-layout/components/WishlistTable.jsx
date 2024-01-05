import Table from "./Table"
import ProductImg from '../../../assets/product-analysis.png'
import ProductImg2 from '../../../assets/product-analysis2.png'

const WishlistTable = () => {
	const data = {
		thead: ["", "Product", "Price", "Availability", ""],
		tbody: [
			[<img src={ProductImg} alt="" />, `Learn to Trade Forex through the News`, 5000, `Out of Stock`, `View Product`], 
			[<img src={ProductImg2} alt="" />, `Build a Blockchain and a Cryptocurrency from Scratch`, 5000, `In Stock`, `View Product`],
			[<img src={ProductImg} alt="" />, `Learn to Trade Forex through the News`, 5000, `Out of Stock`, `View Product`],
			[<img src={ProductImg2} alt="" />, `Build a Blockchain and a Cryptocurrency from Scratch`, 5000, `In Stock`, `View Product`],
			[<img src={ProductImg} alt="" />, `Learn to Trade Forex through the News`, 5000, `Out of Stock`, `View Product`],
		],
	}

	return (
		<div>
			<Table data={data} />
		</div>
	)
}

export { WishlistTable }
