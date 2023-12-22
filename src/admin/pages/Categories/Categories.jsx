import React, {useState} from 'react'
import PostImageSample from '../../assets/PostImageSample.png'
import { BsCloudArrowUp, BsPencilSquare, BsSearch, BsTrash3, BsXCircle } from 'react-icons/bs'
import '../Posts/Posts.css'
import './Categories.css'
import Modal from '../../components/Modal/Modal'


const Posts = ({sideMenuOpen}) => {
  const postsData = [
    {
      id: 1,
      name: "Understanding Demand and Supply 1",
      image: PostImageSample,
      description: "The original flavor that started it all.",
      tag: 'Finance',
      author: '@insideredox'
    },
    {
      id: 2,
      name: "Understanding Demand and Supply 2",
      image: PostImageSample,
      description: "Bold cheesy flavor and a satisfying crunch.",
      tag: 'Finance',
      author: '@insideredox'
    },
    {
      id: 3,
      name: "Understanding Demand and Supply 3",
      image: PostImageSample,
      description: "A taste of fiesta in every bite.",
      tag: 'Finance',
      author: '@insideredox'
    },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [modalIdentifier, setModalIdentifier] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState('');


  // Input field handler
  const handleCatInputChange = (event) => {
    setNewCategory(event.target.value);
  };
  // Input field handler
  const handleCatKeyDown = (event) => {
    if (event.key === 'Enter') {
      addCategory(newCategory);
    }
  };
  const addCategory = (newCategory) => {
    if (newCategory) { // Check for empty input
      setCategories([...categories, newCategory]);
      setNewCategory(''); // Clear input field after adding
    }
  };
  


  const [isOpen1, setIsOpen1] = useState(false);

  // const handleOpen1 = () => setIsOpen1(true);
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
          name="category"
          id="category"
          placeholder='Edit category'
          onChange={(event) => handleCatInputChange(event)}
          onKeyDown={(event) => handleCatKeyDown(event)}
        />
        <ul>
          {categories.map((category) => (
            <li key={category}>{category}</li>
          ))}
        </ul>
        <button type='button'>Next</button>
      </form>
    </article>
  );


  const [isOpen2, setIsOpen2] = useState(false);

  // const handleOpen2 = () => setIsOpen2(true);
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
      <aside className='admin-category-aside'>
        <h3>Category</h3>
        <div>
          <p>Filter post by category</p>
          <span>
            <BsSearch/>
            <input
              type="search"
              name="category"
              id="category"
              placeholder='Search'
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
            />
          </span>
        </div>
      </aside>
      {postsData.map((item) => {
        const lowerCaseName = item.name.toLowerCase();
        const lowerCaseSearchQuery = searchQuery.toLowerCase();
        return lowerCaseName.includes(lowerCaseSearchQuery) ? (
          <Post key={item.id} item={item} />
        ) : null;
      })}
    </section>
  )
}

export default Posts