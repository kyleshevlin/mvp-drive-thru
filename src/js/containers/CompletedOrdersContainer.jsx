import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import OrdersList from '../components/OrdersList'

class CompletedOrdersContainer extends Component {
  render () {
    return (
      <OrdersList
        heading='Completed Orders'
        orders={this.props.orders}
      />
    )
  }
}

CompletedOrdersContainer.propTypes = {
  orders: PropTypes.array
}

const mapStateToProps = state => ({
  orders: state.completedOrders
})

export default connect(mapStateToProps)(CompletedOrdersContainer)
