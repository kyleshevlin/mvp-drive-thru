import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { cancelOrder, completeOrder } from '../actions'
import OrdersListItem from './OrdersListItem'

class OpenOrdersListItem extends Component {
  render () {
    const {
      item,
      cancelOrder,
      completeOrder
    } = this.props

    return (
      <OrdersListItem item={item}>
        <div className='orders_list-item-buttons-wrap'>
          <Link className='btn--edit' to={`/edit-order/${item.id}`}>Edit</Link>
          <button
            className='btn--cancel orders_list-item-button--cancel'
            onClick={() => {
              const response = window.confirm('Are you sure?')
              response && cancelOrder(item.id)
            }}
          >
            Cancel
          </button>
          <button
            className='btn orders_list-item-button--complete'
            onClick={() => { completeOrder(item.id) }}
          >
            Complete
          </button>
        </div>
      </OrdersListItem>
    )
  }
}

OpenOrdersListItem.propTypes = {
  item: PropTypes.object,
  cancelOrder: PropTypes.func,
  completeOrder: PropTypes.func
}

const mapDispatchToProps = {
  cancelOrder,
  completeOrder
}

export default connect(null, mapDispatchToProps)(OpenOrdersListItem)
