import { BsPencilSquare, BsTrash } from "react-icons/bs"
import { Link } from "react-router-dom"
import AVATARImg from "../../assets/AVATAR.png"
import Chart from "../../components/Chart/DashboardChart"
import "./Dashboard.css"

const Dashboard = ({ sideMenuOpen }) => {
	const data = [
		{ name: "Ayo Jahn", email: "john@mail.com", phone: "+234 900 000 0000", amount: "₦39,000.00" },
		{ name: "Dominic Praise", email: "dom@nestlypay.co", phone: "+234 900 000 0000", amount: "₦90,000.00" },
		{ name: "John Doe", email: "hello@doe.xyz", phone: "+234 900 000 0000", amount: "₦69,000.00" },
	]

	return (
		<section className={sideMenuOpen ? "dashboard__section mobile--hidden" : "dashboard__section"}>
			<header>
				<div className="admin--details">
					<div>
						<h2>Welcome to Redox, Admin🎊</h2>
						<p>Here is your business overview</p>
					</div>
					<button className="btn">
						<a href="#">Create Analysis</a>
					</button>
				</div>
				<div className="box--analytics">
					<article
						className="info--boxes"
						style={{ backgroundColor: "#ff5f00", color: "white" }}>
						<h6>Total Sales</h6>
						<h4>₦131,900,092.00</h4>
						<p>- Decreased 9.4% today</p>
					</article>
					<article className="info--boxes">
						<h6>Total Users</h6>
						<h4>301,900</h4>
						<p style={{ color: "#FF0000B2" }}>- Decreased 9.4% today</p>
					</article>
					<article className="info--boxes">
						<h6>Total Posts</h6>
						<h4>31,900</h4>
						<p style={{ color: "#27AE60B2" }}>+ Increased 11.7% today</p>
					</article>
				</div>
			</header>
			<Chart />
			<aside className="desktop__only">
				<span>
					<h6>Users</h6>
					<h6>
						<a href="/admin/allusers">All Users</a>
					</h6>
				</span>
				<table>
					<thead>
						<tr>
							<th></th>
							<th>Name</th>
							<th>Email Address</th>
							<th>Phone</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						{data.map(row => (
							<tr key={row.name}>
								<td>
									<p className="user-img">{row.name.slice(0, 1)}</p>
								</td>
								<td>{row.name}</td>
								<td>{row.email}</td>
								<td>{row.phone}</td>
								<td>
									<span>
										<BsPencilSquare />
										<BsTrash />
									</span>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</aside>
			<aside className="mobile__only">
				<span>
					<h5>All Users</h5>
					<Link to="/admin/allusers">View All</Link>
				</span>
				{data.map((user, idx) => (
					<div
						className="user"
						key={idx}>
						<span>
							<img
								src={AVATARImg}
								alt=""
							/>
							<span>
								<h6>{user.name}</h6>
								<p>{user.amount}</p>
							</span>
						</span>
						<button>Action</button>
					</div>
				))}
			</aside>
		</section>
	)
}

export default Dashboard
