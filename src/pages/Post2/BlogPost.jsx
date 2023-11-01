import React, {useState} from 'react';
import Navbar from "../../components/Layout/Navbar/Navbar"
import Footer from "../../components/Layout/Footer/Footer"
import Imgplaceholder from "../../assets/imgplaceholder.png"

const BlogPost = () => {
  const post = {
    title: 'Sample Blog Post Title',
    author: 'John Doe',
    date: 'October 15, 2023',
    coverImage: 'path-to-cover-image.jpg',
    content: `<p>Hendrerit ad nisl augue iaculis. Interdum eros inceptos ultricies Ultrices pharetra accumsan inceptos ullamcorper mus placerat ligula leo interdum. Vel hymenaeos sociis elit. Condimentum quis habitasse dapibus.</p>
    <p>Dolor. Porttitor. Curae; feugiat justo duis donec lobortis penatibus montes pharetra ante donec ridiculus scelerisque semper litora per rhoncus hymenaeos. Odio suspendisse tortor nascetur sit placerat. Luctus etiam mauris. Class, a erat.</p>    
    <p>Aliquet adipiscing magnis sodales eu. Eros vestibulum quis taciti interdum accumsan nibh et erat aliquam mollis. Curae; ultrices hac conubia. Pulvinar potenti hendrerit, dui class neque cubilia tristique rhoncus ipsum curae; orci nisl ipsum mus commodo, netus ipsum vulputate duis. Egestas.</p>`,
    categories: ['Category 1', 'Category 2'],
    comments: [/* Array of comments */],
  };

  const [newComment, setNewComment] = useState('');
  const [comments, setComments] = useState([
    // Initial comments array
    'This is a great post!',
    'Insightful content.',
  ]);

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim() !== '') {
      setComments([...comments, newComment]);
      setNewComment(''); // Clear the comment input after submitting
    }
  };

  const handleDeleteComment = (index) => {
    const updatedComments = comments.filter((_, i) => i !== index);
    setComments(updatedComments);
  };

  return (
    <div>
      <Navbar/>
      <div className='create'>
        <h1>{post.title}</h1>
        <p>By {post.author} | {post.date}</p>
        <div>
          <img src={Imgplaceholder} alt="Cover" style={{ width: '50%', height: '300px' }} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />

        <div>
          <p>Categories:</p>
          <ul>
            {post.categories.map((category, index) => (
              <li key={index}>{category}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2>Comments</h2>
          {
          // post.comments.map((comment, index) => (
          //   <div key={index}>
          //     /* Render individual comments */
          //   </div>
          // ))
          }
        </div>
        <div>
          {comments.map((comment, index) => (
            <div key={index}>
              <span>{comment}</span>
              <button onClick={() => handleDeleteComment(index)}>X</button>
            </div>
          ))}
        </div>
        <form onSubmit={handleCommentSubmit}>
          <input
            type="text"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Add a comment"
          />
          <button type="submit">Submit</button>
        </form>
      </div>
      <Footer/>
    </div>
  );
};

export default BlogPost;
