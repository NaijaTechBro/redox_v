import { CategoryScale, Chart as ChartJS, Legend, LineElement, LinearScale, PointElement, Title, Tooltip } from "chart.js"
import { useEffect, useState } from "react"
import { Line } from "react-chartjs-2"

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

export const options = {
	responsive: true,
	plugins: {
		legend: {
			position: "top",
			display: false,
		},
		title: {
			display: false,
			text: "Chart.js Line Chart",
		},
	},
}

const DashboardChart = ({ posts, users }) => {
	const [chartData, setChartData] = useState({
		labels: ["Sunday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
		datasets: [
			{
				label: "Sales",
				data: [100000, 50000, 20000, 10000, 5000, 2000, 1000],
				borderColor: "#FF5F00",
				backgroundColor: "#FF5F00",
			},
			{
				label: "Users",
				data: [1000, 5000, 20000, 10000, 5000, 10000, 1000],
				borderColor: "rgb(53, 162, 235)",
				backgroundColor: "rgba(53, 162, 235, 0.5)",
			},
			{
				label: "Posts",
				data: [1000, 50000, 20000, 100000, 5000, 20000, 10000],
				borderColor: "#F7C9A5",
				backgroundColor: "#F7C9A5",
			},
		],
	})

	useEffect(() => {
		posts.length > 0 &&
			posts.forEach(post => {
				console.log(post)
			})
	}, [posts, users])

	// const getDay = () => new Date().getDay()
	// const getDate = () => new Date().getDate()

	// const getSingleDay = (day, data) => {
	// 	// const today = new Date()

	// 	const oneDayAgo = 24 * 60 * 60 * 1000
	// 	// let ago = 0

	// 	return new Date(new Date().getTime() - oneDayAgo * 2)
	// }
	// console.log(getSingleDay())
	// console.log(getDate())
	// console.log(getDay())
	// console.log(posts)
	// console.log(users)

	return (
		<Line
			options={options}
			data={chartData}
		/>
	)
}

export default DashboardChart
