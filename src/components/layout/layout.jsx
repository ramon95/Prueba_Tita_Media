import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import Header from '../header/header'
import Loading from '../loading/Loading'

const Layout = ({ children }) => {
  const loading = useSelector((state) => state.loading)
  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Header />
          {children}
        </>
      )}
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.element.isRequired,
}

export default Layout
