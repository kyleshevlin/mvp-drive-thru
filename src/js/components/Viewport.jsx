import React from 'react'
import PropTypes from 'prop-types'

const Viewport = ({ children }) => (
  <div className='viewport'>
    {children}
  </div>
)

Viewport.propTypes = {
  children: PropTypes.any
}

export default Viewport
