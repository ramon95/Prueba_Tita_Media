import React from 'react'
import PropTypes from 'prop-types'
import '../../assets/styles/modal.scss'

const Modal = ({ title, children, hideModal }) => (
  <div className="modal_content">
    <div className="modal_content-box">
      <div className="modal_content-box-title">
        <h1>{title}</h1>
        <h3
          aria-hidden="true"
          onClick={hideModal}
          className="modal_content-box-close"
        >
          X
        </h3>
      </div>
      {children}
    </div>
  </div>
)
Modal.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  hideModal: PropTypes.func.isRequired,
}
export default Modal
