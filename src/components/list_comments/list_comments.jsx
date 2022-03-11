import React from 'react'
import moment from 'moment'
import PropTypes from 'prop-types'
import '../../assets/styles/listComments.scss'

const ListComments = ({ comments }) => (
  <div className="listComments_container">
    {comments.length > 0 ? (
      comments.map((comment) => (
        <div key={comment.id}>
          <div className="listComments_container-user" key={comment.id}>
            <img src={comment.owner.picture} alt="User Avatar" />
            <h3>{comment.owner.firstName}</h3>
          </div>
          <div className="listComments_container-comment">
            <p>{comment.message}</p>
            <p className="date">
              {moment(comment.publishDate).format('MMMM Do YYYY')}
            </p>
          </div>
        </div>
      ))
    ) : (
      <h1>No Comments</h1>
    )}
  </div>
)

ListComments.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      message: PropTypes.string,
      post: PropTypes.string,
      publishDate: PropTypes.string,
      owner: PropTypes.shape({
        firstName: PropTypes.string,
        id: PropTypes.string,
        lastName: PropTypes.string,
        picture: PropTypes.string,
        title: PropTypes.string,
      }),
    })
  ).isRequired,
}

export default ListComments
