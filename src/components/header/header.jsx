import React, { useState } from 'react'
import Cookies from 'universal-cookie'
import { useNavigate } from 'react-router-dom'
import Logo from '../../assets/image/logo.jpg'
import '../../assets/styles/header.scss'

const Header = () => {
  const [dropdown, setDropdown] = useState(false)
  const cookies = new Cookies()
  const navigate = useNavigate()
  const handleLogout = () => {
    cookies.remove('email', { path: '/' })
    cookies.remove('familyName', { path: '/' })
    cookies.remove('givenName', { path: '/' })
    cookies.remove('imageUrl', { path: '/' })
    cookies.remove('name', { path: '/' })
    navigate('/login')
  }
  return (
    <div className="header_container">
      <img src={Logo} alt="Logo Tita Media" />
      <h1 className="title">Tita Media</h1>
      <div
        aria-hidden="true"
        className="header_container_dropdown"
        onClick={() => setDropdown(!dropdown)}
      >
        <img src={cookies.get('imageUrl')} alt="Avatar User" />
        <p>{cookies.get('givenName')}</p>
        <p
          className={`header_container_dropdown-content ${
            dropdown ? 'active' : 'no_active'
          }`}
          aria-hidden="true"
          onClick={handleLogout}
        >
          Logout
        </p>
      </div>
    </div>
  )
}

export default Header
