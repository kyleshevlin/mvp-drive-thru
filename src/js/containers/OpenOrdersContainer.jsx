import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import OrdersList from '../components/OrdersList'
import OpenOrdersListItem from '../components/OpenOrdersListItem'

class OpenOrdersContainer extends Component {
  render () {
    return (
      <OrdersList
        heading='Open Orders'
        orders={this.props.orders}
        ordersListItemComponent={OpenOrdersListItem}
      />
    )
  }
}

OpenOrdersContainer.propTypes = {
  orders: PropTypes.array
}

const mapStateToProps = state => ({
  orders: state.openOrders
})

export default connect(mapStateToProps)(OpenOrdersContainer)
