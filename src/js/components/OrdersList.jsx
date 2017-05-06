import React from 'react'
import PropTypes from 'prop-types'
import OrdersListItem from './OrdersListItem'

const OrdersList = ({
  heading = 'Orders List',
  orders,
  ordersListItemComponent = OrdersListItem
}) => {
  const innerContents = orders.length ? (
    <ol className='orders_list'>
      {orders.map(order => (
        React.createElement(ordersListItemComponent, { key: order.id, item: order }
      )))}
    </ol>
  ) : <p>No orders to display.</p>

  return (
    <div className='orders_list-wrap'>
      <h1>{heading}</h1>
      {innerContents}
    </div>
  )
}

OrdersList.propTypes = {
  heading: PropTypes.string,
  orders: PropTypes.array,
  ordersListItemComponent: PropTypes.func
}

export default OrdersList
