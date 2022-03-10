import React from 'react'
import PropTypes from 'prop-types'
import '../../assets/styles/boxPost.scss'

const BoxPost = ({ post }) => (
  <div className="box_post_container">
    <div className="box_post_content">
      <img src={post.image} alt="Post" />
      <div className="box_post_container-title">
        <img src={post.owner.picture} alt="User creator of the post" />
        <div>
          <h1>{post.owner.firstName}</h1>
          <p>{post.text}</p>
        </div>
      </div>
      <div className="box_post_container-tags">
        {post.tags.map((tag) => (
          <p>{tag}</p>
        ))}
      </div>
      <div className="box_post_container-interactions">
        <p>{post.likes} Likes</p>
        <p>Comentarios</p>
      </div>
    </div>
  </div>
)

BoxPost.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.string,
    image: PropTypes.string,
    likes: PropTypes.number,
    publishDate: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
    text: PropTypes.string,
    owner: PropTypes.shape({
      id: PropTypes.string,
      lastName: PropTypes.string,
      title: PropTypes.string,
      picture: PropTypes.string,
      firstName: PropTypes.string,
    }),
  }).isRequired,
}

export default BoxPost
