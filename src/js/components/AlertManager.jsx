import React from 'react'
import PropTypes from 'prop-types'

const AlertManager = ({ openOrders }) => {
  return openOrders.length > 4 ? (
    <div className='alert_manager'>
      <p>
        We've been overrun with orders. Do something quick! Get the manager.
      </p>
    </div>
  ) : null
}

AlertManager.propTypes = {
  openOrders: PropTypes.array
}

export default AlertManager
