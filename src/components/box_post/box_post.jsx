import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faTags } from '@fortawesome/free-solid-svg-icons'
import { faComment } from '@fortawesome/free-regular-svg-icons'
import { setPostId, setUserId } from '../../redux/actions'
import '../../assets/styles/boxPost.scss'

const BoxPost = ({ post, hideModalComments, hideModalUser }) => {
  const dispatch = useDispatch()

  const handleViewModalComments = (id) => {
    dispatch(setPostId(id))
    hideModalComments()
  }

  const handleViewModalUser = (id) => {
    dispatch(setUserId(id))
    hideModalUser()
  }

  return (
    <div className="box_post_container">
      <div className="box_post_content">
        <div className="box_post_content-photo-post">
          <img src={post.image} alt="Post" />
        </div>
        <div className="box_post_container-title">
          <img
            aria-hidden="true"
            onClick={() => handleViewModalUser(post.owner.id)}
            src={post.owner.picture}
            alt="User creator of the post"
          />
          <div>
            <h1>{post.owner.firstName}</h1>
            <p>{post.text}</p>
          </div>
        </div>
        <div className="box_post_container-tags">
          <p className="box_post_container-tags-title">
            <FontAwesomeIcon icon={faTags} /> Tags:
          </p>
          <div className="box_post_container-tags-items">
            {post.tags.map((tag, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <p key={index}>{tag}</p>
            ))}
          </div>
        </div>
        <div className="box_post_container-interactions">
          <p>
            <FontAwesomeIcon icon={faHeart} color="red" /> {post.likes} Likes
          </p>
          <p
            aria-hidden="true"
            onClick={() => handleViewModalComments(post.id)}
            className="box_post_container-interactions-commets"
          >
            <FontAwesomeIcon icon={faComment} color="gray" /> Comments
          </p>
        </div>
      </div>
    </div>
  )
}

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
  hideModalComments: PropTypes.func.isRequired,
  hideModalUser: PropTypes.func.isRequired,
}

export default BoxPost
