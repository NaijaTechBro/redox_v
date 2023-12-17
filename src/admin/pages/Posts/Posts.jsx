import React from 'react'
import PostImageSample from '../../assets/PostImageSample.png'
import { BsPencilSquare, BsTrash3 } from 'react-icons/bs'
import './Posts.css'

const Posts = () => {
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

  function Post({ item }) {
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
            <BsPencilSquare/>
            <BsTrash3/>
          </span>
        </div>
      </article>
    )
  }

  return (
    <section className="admin-posts-list">
      {postsData.map((item) => (
        <Post key={item.id} item={item} />
      ))}
    </section>
  )
}

export default Posts