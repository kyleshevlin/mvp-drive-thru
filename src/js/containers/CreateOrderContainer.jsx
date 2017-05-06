import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { createOrder } from '../actions'
import defaultOrder from '../constants/defaultOrder'
import OrderPage from '../components/OrderPage'

class CreateOrderContainer extends Component {
  constructor () {
    super()

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit (e, order) {
    e.preventDefault()
    this.props.createOrder(order)
    this.props.history.push('/open-orders')
  }

  render () {
    return (
      <OrderPage
        className='create_order'
        heading='Create Order'
        startingOrder={defaultOrder}
        onSubmit={this.handleSubmit}
        formSubmitValue='Create Order'
      />
    )
  }
}

CreateOrderContainer.propTypes = {
  createOrder: PropTypes.func,
  history: PropTypes.object
}

const mapDispatchToProps = {
  createOrder
}

export default withRouter(connect(null, mapDispatchToProps)(CreateOrderContainer))
