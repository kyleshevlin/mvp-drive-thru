import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import OrdersList from '../components/OrdersList'

class CanceledOrdersContainer extends Component {
  render () {
    return (
      <OrdersList
        heading='Canceled Orders'
        orders={this.props.orders}
      />
    )
  }
}

CanceledOrdersContainer.propTypes = {
  orders: PropTypes.array
}

const mapStateToProps = state => ({
  orders: state.canceledOrders
})

export default connect(mapStateToProps)(CanceledOrdersContainer)
