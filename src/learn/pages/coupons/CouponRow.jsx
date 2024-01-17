import { formatDate } from "../../../helpers"
import { useCurrency } from "../../../hooks/useCurrency"

const CouponRow = ({ row }) => {
	const [price] = useCurrency(Number(row.totalAmount), `en-NG`, `NGN`)

	return (
		<tr>
			<td>
				<p className="user-img">{row?.couponCode.slice(0, 1) || ``}</p>
			</td>
			<td>{row?.couponCode || ``}</td>
			<td>{formatDate(row.expiredAt)}</td>
			<td>{formatDate(row.createdAt)}</td>
			<td>{price}</td>
			{row.userType.toLowerCase() == "user" && (
				<td>
					<p className="normal--admin">User</p>
				</td>
			)}
			{row.userType.toLowerCase() == "pro" && (
				<td>
					<p className="pro--admin">Pro</p>
				</td>
			)}
			{row.userType.toLowerCase() == "charter" && (
				<td>
					<p className="charter--admin">Charter</p>
				</td>
			)}
		</tr>
	)
}

export default CouponRow
