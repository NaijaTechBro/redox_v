import { useGetCouponsQuery } from "../../../service/apiHandler"
import AvatarImg from "../../../admin/assets/AVATAR.png"
import CouponRow from "./CouponRow"
import '../../../admin/pages/AllAdmin/AllAdmin.css'

const Coupons = ({ sideMenuOpen }) => {
	const { data: coupons = [] } = useGetCouponsQuery()

	return (
		<section className={sideMenuOpen ? "dashboard__section mobile--hidden" : "dashboard__section"}>
			<aside>
				<span>
					<h6>Coupons</h6>
					<button className="allAdmin--btn">
						<a href="/admin">Create Coupon</a>
					</button>
				</span>
				<table className="all--admin__desktop">
					<thead>
						<tr>
							<th></th>
							<th>Name</th>
							<th>Due Date</th>
							<th>Issue Date</th>
							<th>Amount</th>
							<th>Status</th>
						</tr>
					</thead>
					<tbody>
						{coupons.map((row, idx) => (
							<CouponRow
								key={idx}
								row={row}
							/>
						))}
					</tbody>
				</table>
				<main className="all--admin__mobile">
					<article className="activity">
						<div className="admin--details">
							<img
								src={AvatarImg}
								alt=""
							/>
							<div>
								<h5>Praise Dominic</h5>
								<p>390.00</p>
							</div>
						</div>
						<p className="normal--admin">Normal</p>
					</article>
					<article className="activity">
						<div className="admin--details">
							<img
								src={AvatarImg}
								alt=""
							/>
							<div>
								<h5>Praise Dominic</h5>
								<p>169.00</p>
							</div>
						</div>
						<p className="charter--admin">Charter</p>
					</article>
				</main>
			</aside>
		</section>
	)
}

export default Coupons
