import React from 'react'
// import './AllAdmin.css'
import AvatarImg from '../../assets/AVATAR.png'

const AllAdmin = ({sideMenuOpen}) => {
  const data = [
    { name: 'NES98926', dueDate: '07/12/2024', issueDate: '07/12/2023', amount: '₦39,000.00', type: 'Normal' },
    { name: 'NES98927', dueDate: '07/12/2024', issueDate: '07/12/2023', amount: '₦39,000.00', type: 'Normal' },
    { name: 'NES98928', dueDate: '07/12/2024', issueDate: '07/12/2023', amount: '₦39,000.00', type: 'Normal' },
  ];

  return (
    <section className={sideMenuOpen ? 'dashboard__section mobile--hidden' : 'dashboard__section'}>
      <aside>
        <span>
          <h6>Coupons</h6>
          <button className='allAdmin--btn'><a href="/admin">Create Coupon</a></button>
        </span>
        <table  className='all--admin__desktop'>
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
            {data.map((row) => (
              <tr key={row.name}>
                <td><p className='user-img'>{row.name.slice(0,1)}</p></td>
                <td>{row.name}</td>
                <td>{row.dueDate}</td>
                <td>{row.issueDate}</td>
                <td>{row.amount}</td>
                {(row.type == 'Normal') && <td><p className='normal--admin'>Normal</p></td>}
                {(row.type == 'Pro') && <td><p className='pro--admin'>Pro</p></td>}
                {(row.type == 'Charter') && <td><p className='charter--admin'>Charter</p></td>}
              </tr>
            ))}
          </tbody>
        </table>
      <main className='all--admin__mobile'>
        <article className='activity'>
          <div className="admin--details">
            <img src={AvatarImg} alt="" />
            <div>
              <h5>Praise Dominic</h5>
              <p>390.00</p>
            </div>
          </div>
          <p className='normal--admin'>Normal</p>
        </article>
        <article className='activity'>
          <div className="admin--details">
            <img src={AvatarImg} alt="" />
            <div>
              <h5>Praise Dominic</h5>
              <p>169.00</p>
            </div>
          </div>
          <p className='charter--admin'>Charter</p>
        </article>
      </main>
      </aside>      
    </section>
  )
}

export default AllAdmin