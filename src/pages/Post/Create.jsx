

import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { ImCross } from 'react-icons/im';
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import { URL } from '../../url';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';
import Navbar from '../../components/Layout/Navbar/Navbar'
import Footer from '../../components/Layout/Footer/Footer'
import './post.css';
import { convert } from 'html-to-text';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [file, setFile] = useState(null);
  const { user } = useContext(UserContext);
  const [cat, setCat] = useState('');
  const [cats, setCats] = useState([]);

  const navigate = useNavigate();

  const deleteCategory = (i) => {
    let updatedCats = [...cats];
    updatedCats.splice(i);
    setCats(updatedCats);
  };

  const addCategory = () => {
    let updatedCats = [...cats];
    updatedCats.push(cat);
    setCat('');
    setCats(updatedCats);
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    const post = {
      title,
      desc: convert(desc), // Convert HTML content to plain text
      username: user.username,
      userId: user._id,
      categories: cats,
    };

    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append('img', filename);
      data.append('file', file);
      post.photo = filename;
      try {
        const imgUpload = await axios.post(URL + '/api/posts/add-img', data);
        formData.image = imgUpload.data.url
      } catch (err) {
        console.log(err);
      }
    }

    try {
      const res = await axios.post(URL + '/api/posts/create', post, {
        withCredentials: true,
      });
      navigate('/posts/post/' + res.data._id);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="create">
        <form className="form-group">
          <h1>Write a post</h1>
          <div className="form-group">
            <label htmlFor="title">Title:</label>
            <input
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              placeholder="Enter post title"
            />
          </div>
          <div className="form-group">
            <label htmlFor="file">Add Image</label>
            <input
              onChange={(e) => setFile(e.target.files[0])}
              type="file"
            />
          </div>
          <div className="form-group">
            <div>
              <input
                value={cat}
                onChange={(e) => setCat(e.target.value)}
                placeholder="Enter post category"
                type="text"
              />
              <div onClick={addCategory} className="add-category">
                Add
              </div>
            </div>

            <div className="form-group">
              {cats?.map((c, i) => (
                <div key={i}>
                  <p className="color">{c}</p>
                  <p onClick={() => deleteCategory(i)}><ImCross /></p>
                </div>
              ))}
            </div>
          </div>
          <div className="form-group">
            <ReactQuill
              value={desc}
              onChange={setDesc}
              placeholder="Write post here"
            />
          </div>
          <button onClick={handleCreate}>Create</button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default CreatePost;