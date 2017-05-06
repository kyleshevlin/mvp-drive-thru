import React from 'react'
import PropTypes from 'prop-types'

const Sidebar = ({ children }) => (
  <div className='sidebar'>
    <h1 className='sidebar-heading'>MVP Drive Thru</h1>
    {children}
  </div>
)

Sidebar.propTypes = {
  children: PropTypes.any
}

export default Sidebar
