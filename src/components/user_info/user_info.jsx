import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import '../../assets/styles/userInfo.scss'

const UserInfo = ({ user }) => (
  <div className="user_info_container">
    <img src={user.picture} alt="User" />
    <div className="user_info_container-personal">
      <h3>
        Name: {user.firstName} {user.lastName}
      </h3>
      <h3>Email: {user.email}</h3>
      <h3>Date of birth: {moment(user.dateOfBirth).format('MMMM Do YYYY')}</h3>
      <h3>Gender: {user.gender}</h3>
      <h3>Title: {user.title}</h3>
      <h3>Phone: {user.phone}</h3>
    </div>
    <div>
      <h3>Locations</h3>
      <h3>Country: {user.location.country}</h3>
      <h3>State: {user.location.state}</h3>
      <h3>City: {user.location.city}</h3>
      <h3>Street: {user.location.street}</h3>
    </div>
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
