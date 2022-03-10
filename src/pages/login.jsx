import React from 'react'
import GoogleLogin from 'react-google-login'
import Cookies from 'universal-cookie'
import { useNavigate } from 'react-router-dom'
import '../assets/styles/login.scss'
import Logo from '../assets/image/logo.jpg'

const Login = () => {
  const cookies = new Cookies()
  const navigate = useNavigate()
  const responseGoogle = (res) => {
    const user = res.profileObj
    cookies.set('email', user.email, { path: '/' })
    cookies.set('familyName', user.familyName, { path: '/' })
    cookies.set('givenName', user.givenName, { path: '/' })
    cookies.set('imageUrl', user.imageUrl, { path: '/' })
    cookies.set('name', user.name, { path: '/' })
    navigate('/')
  }
  return (
    <div className="login_container">
      <div className="login_box">
        <div className="login_box_header">
          <img src={Logo} alt="Logo Tita Media" />
        </div>
        <div className="login_box_body">
          <h1>Login Prueba Tita Media</h1>
          <p>Usando API de Goolge</p>
          <GoogleLogin
            clientId={process.env.REACT_APP_GOOGLE_KEY}
            buttonText="Login with google"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy="single_host_origin"
          />
        </div>
      </div>
    </div>
  )
}

export default Login
