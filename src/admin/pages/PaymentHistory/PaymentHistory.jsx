import React, {useState} from 'react'
// import './AllAdmin.css'
import { BsPencilSquare, BsTrash, BsTrash3, BsXCircle } from 'react-icons/bs'
import AvatarImg from '../../assets/AVATAR.png'
import Modal from '../../components/Modal/Modal'

const AllAdmin = ({sideMenuOpen}) => {
  const data = [
    { id: 1, name: 'NES98926', dueDate: '07/12/2024', issueDate: '07/12/2023', amount: '₦39,000.00' },
    { id: 2, name: 'NES98927', dueDate: '07/12/2024', issueDate: '07/12/2023', amount: '₦39,000.00' },
    { id: 3, name: 'NES98928', dueDate: '07/12/2024', issueDate: '07/12/2023', amount: '₦39,000.00' },
  ];
  
  const [modalIdentifier, setModalIdentifier] = useState(null)

  //Modal 1
  const [isOpen1, setIsOpen1] = useState(false);

  const handleOpen1 = (identifier) => {
    setIsOpen1(true);
    setModalIdentifier(identifier);
  };
  const modalContent1 = () => (
    <article className='admin--post--modal1'>
      <span>
        <h4>Edit Post</h4>
        <BsXCircle onClick={() => setIsOpen1(false)}/>
      </span>
      <form action="">
        <input
          type="text"
          name="fullName"
          placeholder='Full name'
        />
        <input
          type="email"
          name="emailAddress"
          placeholder='Email Address'
        />
        <input
          type="tel"
          name="number"
          placeholder='Phone Number'
        />
        <span>
          <button type='button' onClick={() => setIsOpen1(false)} className='button-one'>Cancel</button>
          <button type='button' className='button-two'>Update</button>
        </span>
      </form>
    </article>
  );

  //Modal 2
  const [isOpen2, setIsOpen2] = useState(false);

  const handleOpen2 = (identifier) => {
    setIsOpen2(true);
    setModalIdentifier(identifier);
  };
  const modalContent2 = () => (
    <article className='admin--post--modal2'>
      <BsTrash3/>
      <h4>Delete Post</h4>
      <p>Are you sure you want to delete this product? Once deleted, it can't be undone.</p>
      <span>
        <button type='button' onClick={() => setIsOpen2(false)} className='button-one'>Cancel</button>
        <button type='button' className='button-two'>Delete</button>
      </span>
    </article>
  );


  return (
    <section className={sideMenuOpen ? 'dashboard__section mobile--hidden' : 'dashboard__section'}>
      <aside>
        <span>
          <h6>Payment History</h6>
          <button className='allAdmin--btn'><a href="/admin">Download CSV</a></button>
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
            {data.map((row, identifier = row.id ) => (
              <tr key={row.name}>
                <td><p className='user-img'>{row.name.slice(0,1)}</p></td>
                <td>{row.name}</td>
                <td>{row.dueDate}</td>
                <td>{row.issueDate}</td>
                <td>{row.amount}</td>
                <td>
                  <span>
                    <BsPencilSquare onClick={() => handleOpen1(identifier)}/>
                    <BsTrash onClick={() => handleOpen2(identifier)}/>
                  </span>
                </td>
                <Modal
                  isOpen={isOpen1 && identifier === modalIdentifier}
                  onClose={() => setIsOpen1(false)}
                  contentFn={modalContent1}
                />
                <Modal
                  isOpen={isOpen2 && identifier === modalIdentifier}
                  onClose={() => setIsOpen2(false)}
                  contentFn={modalContent2}
                />
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