import React from 'react'
import PropTypes from 'prop-types'

const Main = ({ children }) => (
  <div className='main'>
    {children}
  </div>
)

Main.propTypes = {
  children: PropTypes.any
}

export default Main
