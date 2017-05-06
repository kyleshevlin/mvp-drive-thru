import React from 'react'
import PropTypes from 'prop-types'
import { Route, Link } from 'react-router-dom'
import classNames from 'classnames'

const NavLink = ({ label, to, activeOnlyWhenExact }) => (
  <Route
    path={to}
    exact={activeOnlyWhenExact}
    children={({ match }) => {
      const itemClasses = classNames(
        'nav-item',
        { 'is-active': match }
      )

      return (
        <div className={itemClasses}>
          <Link to={to}>{label}</Link>
        </div>
      )
    }}
  />
)

NavLink.propTypes = {
  label: PropTypes.string,
  to: PropTypes.string,
  activeOnlyWhenExact: PropTypes.bool
}

export default NavLink
