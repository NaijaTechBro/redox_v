import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { BsPencilSquare, BsTrash, BsTrash3, BsXCircle } from 'react-icons/bs'
import './AllUsers.css'
import AVATARImg from '../../assets/AVATAR.png'
import Modal from '../../components/Modal/Modal'

const AllUsers = ({sideMenuOpen}) => {

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

  //Modal 3
  const [isOpen3, setIsOpen3] = useState(false);

  const handleOpen3 = (identifier) => {
    setIsOpen3(true);
    setModalIdentifier(identifier);
  };
  const modalContent3 = () => (
    <article className='admin--post--modal1'>
      <span>
        <h4>Add New User</h4>
        <BsXCircle onClick={() => setIsOpen3(false)}/>
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
        <button type='button'>Add Client</button>
      </form>
    </article>
  );


  const data = [
    { id: 1, name: 'Ayo Jahn', email: 'john@mail.com', phone: '+234 900 000 0000', amount: '₦39,000.00' },
    { id: 2, name: 'Dominic Praise', email: 'dom@nestlypay.co', phone: '+234 900 000 0000', amount: '₦90,000.00' },
    { id: 3, name: 'John Doe', email: 'hello@doe.xyz', phone: '+234 900 000 0000', amount: '₦69,000.00' },
  ];

  return (
    <section className={sideMenuOpen ? 'dashboard__section mobile--hidden' : 'dashboard__section'}>
      <aside className='desktop__only'>
        <span>
          <h6>All Users</h6>
          <button type='button' onClick={() => handleOpen3('addNewUser')}>Add New User</button>
          <Modal
            isOpen={isOpen3 && 'addNewUser' === modalIdentifier}
            onClose={() => setIsOpen3(false)}
            contentFn={modalContent3}
          />
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
            {data.map((row, identifier = row.id ) => (
              <tr key={row.id}>
                <td><p className='user-img'>{row.name.slice(0,1)}</p></td>
                <td>{row.name}</td>
                <td>{row.email}</td>
                <td>{row.phone}</td>
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
      </aside>
      <aside className="mobile__only">
        <span>
          <h5>All Users</h5>
          <button type='button'>Add New User</button>
        </span>
        {data.map((user) => (
          <div className="user">
            <span>
              <img src={AVATARImg} alt="" />
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

export default AllUsers