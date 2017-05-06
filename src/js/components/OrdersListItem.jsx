import React from 'react'
import PropTypes from 'prop-types'

const OrdersListItem = ({
  item: {
    id,
    havingBurger,
    burger,
    havingFries,
    havingDrink,
    drink
  },
  children
}) => (
  <li className='orders_list-item'>
    {havingBurger ? (
      <div className='orders_list-item-burger'>
        Burger:
        <div className='orders_list-item-burger-details'>
          <div>Bun: {burger.bun}</div>
          <div>Patty: {burger.patty}</div>
          <div>Cheese: {burger.cheese}</div>
          <div>Condiments: {burger.condiments.join(', ')}</div>
        </div>
      </div>
    ) : null}
    {havingFries ? (
      <div className='orders_list-item-fries'>Fries</div>
    ) : null}
    {havingDrink ? (
      <div className='orders_list-item-drink'>Drink: {drink}</div>
    ) : null}

    {children}
  </li>
)

OrdersListItem.propTypes = {
  item: PropTypes.object,
  children: PropTypes.any
}

export default OrdersListItem
