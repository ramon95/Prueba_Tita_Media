import React from 'react'
import PropTypes from 'prop-types'
import Header from '../header/header'

const Layout = ({ children }) => (
  <div>
    <Header />
    {children}
  </div>
)

Layout.propTypes = {
  children: PropTypes.element.isRequired,
}

export default Layout
