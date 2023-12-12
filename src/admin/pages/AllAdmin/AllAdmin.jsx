import React from 'react'
import './AllAdmin.css'

const AllAdmin = () => {
  const data = [
    { name: 'Ayo Jahn', email: 'john@mail.com', number: '390.00', type: 'Normal' },
    { name: 'Dominic Praise', email: 'dom@nestlypay.co', number: '390.00', type: 'Pro' },
    { name: 'John Doe', email: 'hello@doe.xyz', number: '390.00', type: 'Charter' },
  ];

  return (
    <section className='dashboard__section'>
      <aside>
        <span>
          <h6>All Admin</h6>
          <button className='allAdmin--btn'><a href="/admin">Download CSV</a></button>
        </span>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email Address</th>
              <th>No. of Post</th>
              <th>Date Joined</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr key={row.name}>
                <td><p className='user-img'>{row.name.slice(0,1)}</p></td>
                <td>{row.name}</td>
                <td>{row.email}</td>
                <td>{row.number}</td>
                <td><p>07/07/2023</p></td>
                {(row.type == 'Normal') && <td><p className='normal--admin'>Normal</p></td>}
                {(row.type == 'Pro') && <td><p className='pro--admin'>Pro</p></td>}
                {(row.type == 'Charter') && <td><p className='charter--admin'>Charter</p></td>}
              </tr>
            ))}
          </tbody>
        </table>
      </aside>      
    </section>
  )
}

export default AllAdmin