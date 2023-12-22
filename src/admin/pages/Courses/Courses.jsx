import React, {useState} from 'react'
import PostImageSample from '../../assets/PostImageSample.png'
import { BsCloudArrowUp, BsPencilSquare, BsTrash3, BsXCircle } from 'react-icons/bs'
// import './Posts.css'
import Modal from '../../components/Modal/Modal'


const Posts = ({sideMenuOpen}) => {
  const postsData = [
    {
      id: 1,
      name: "Understanding Demand and Supply",
      image: PostImageSample,
      description: "The original flavor that started it all.",
      tag: 'Finance',
      author: '@insideredox'
    },
    {
      id: 2,
      name: "Understanding Demand and Supply",
      image: PostImageSample,
      description: "Bold cheesy flavor and a satisfying crunch.",
      tag: 'Finance',
      author: '@insideredox'
    },
    {
      id: 3,
      name: "Understanding Demand and Supply",
      image: PostImageSample,
      description: "A taste of fiesta in every bite.",
      tag: 'Finance',
      author: '@insideredox'
    },
  ];

  const [modalIdentifier, setModalIdentifier] = useState(null);


  const [isOpen1, setIsOpen1] = useState(false);

  const handleOpen1 = (identifier) => {
    setIsOpen1(true);
    setModalIdentifier(identifier);
  };
  const modalContent1 = () => (
    <article className='admin--post--modal1'>
      <span>
        <h4>Edit Video</h4>
        <BsXCircle onClick={() => setIsOpen1(false)}/>
      </span>
      <form action="">
        <input type="text" name="title" id="title" placeholder='Video title'/>
        <input type="text" name="title" id="title" placeholder='Description'/>
        <div>
          <BsCloudArrowUp/>
          <span>
            <h5>Upload Video</h5>
            <p>{'Recommended size 400x100 (png, jpg)'}</p>
          </span>
        </div>
        <button type='button'>Next</button>
      </form>
    </article>
  );


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




  function Post({ item, identifier = item.id }) {
    return (
      <article className="admin__post">
        <img className="admin__post__image" src={item.image} alt={item.name} />
        <div className="admin__post__info">
          <span>
            <h3 className="admin__post__info__name">{item.name}</h3>
            <p className="admin__post__info__description">{item.description}</p>
            <span className='admin__post__info__metadata'>
              <button>{item.tag}</button>
              <p className="admin__post__info__author">Created by {item.author}</p>
            </span>
          </span>
          <span className="admin__post__edit__span">
            <BsPencilSquare  onClick={() => handleOpen1(identifier)}/>
            <BsTrash3  onClick={() => handleOpen2(identifier)}/>
          </span>
        </div>
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
      </article>
    )
  }

  return (
    <section className={sideMenuOpen ? 'admin-posts-list mobile--hidden' : 'admin-posts-list'}>
      <aside className='admin-post-aside'>
        <h3>All Courses</h3>
        <button type='button'>Add Video</button>
      </aside>
      {postsData.map((item) => (
        <Post key={item.id} item={item} />
      ))}
    </section>
  )
}

export default Posts