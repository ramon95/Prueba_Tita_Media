import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import '../../assets/styles/userInfo.scss'

const UserInfo = ({ user }) => (
  <div className="user_info_container">
    <div className="user_info_container_group">
      <img src={user.picture} alt="User" />
      <div className="user_info_container-personal">
        <h3>
          <strong>Name:</strong> {user.firstName} {user.lastName}
        </h3>
        <h3>
          <strong>Email: </strong>
          {user.email}
        </h3>
        <h3>
          <strong>Date of birth:</strong>{' '}
          {moment(user.dateOfBirth).format('MMMM Do YYYY')}
        </h3>
        <h3>
          <strong>Gender:</strong> {user.gender}
        </h3>
        <h3>
          <strong>Title:</strong> {user.title}
        </h3>
        <h3>
          <strong>Phone:</strong> {user.phone}
        </h3>
      </div>
    </div>
    {user.location && (
      <div className="locations">
        <h3>
          <strong>Locations: </strong>
          {user.location.country}-{user.location.state}-{user.location.city}-
          {user.location.street}
        </h3>
      </div>
    )}
  </div>
)

UserInfo.propTypes = {
  user: PropTypes.shape({
    dateOfBirth: PropTypes.string,
    email: PropTypes.string,
    firstName: PropTypes.string,
    gender: PropTypes.string,
    id: PropTypes.string,
    lastName: PropTypes.string,
    location: PropTypes.shape({
      city: PropTypes.string,
      country: PropTypes.string,
      state: PropTypes.string,
      street: PropTypes.string,
      timezone: PropTypes.string,
    }),
    phone: PropTypes.string,
    picture: PropTypes.string,
    registerDate: PropTypes.string,
    title: PropTypes.string,
    updatedDate: PropTypes.string,
  }).isRequired,
}

export default UserInfo
