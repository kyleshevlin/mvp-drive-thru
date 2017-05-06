import React from 'react'
import PropTypes from 'prop-types'
import NavLink from './NavLink'

const Nav = ({
  openOrders,
  canceledOrders,
  completedOrders
}) => (
  <nav className='nav'>
    <NavLink to='/' activeOnlyWhenExact label='Home' />
    <NavLink to='/create-order' label='Create Order' />
    <NavLink to='/open-orders' label={`Open Orders (${openOrders.length})`} />
    <NavLink to='/canceled-orders' label={`Canceled Orders (${canceledOrders.length})`} />
    <NavLink to='/completed-orders' label={`Completed Orders (${completedOrders.length})`} />
  </nav>
)

Nav.propTypes = {
  openOrders: PropTypes.array,
  canceledOrders: PropTypes.array,
  completedOrders: PropTypes.array
}

export default Nav
