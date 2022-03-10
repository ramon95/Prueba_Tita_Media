import React from 'react'
import PropTypes from 'prop-types'
import Header from '../header/header'

const Layout = ({ children }) => (
  <div>
    <Header />
    {children}
    <h1>hola</h1>
  </div>
)

Layout.propTypes = {
  children: PropTypes.element.isRequired,
}

export default Layout
