import { CategoryScale, Chart as ChartJS, Legend, LineElement, LinearScale, PointElement, Title, Tooltip } from "chart.js"
import React, { useState } from "react"
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

	const getDay = () => new Date().getDay()
	console.log(getDay())
	console.log(posts)
	console.log(users)

	return (
		<Line
			options={options}
			data={chartData}
		/>
	)
}

export default DashboardChart
