import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { updateOrder } from '../actions'
import OrderPage from '../components/OrderPage'

class EditOrderContainer extends Component {
  constructor () {
    super()

    this.state = {
      order: null
    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount () {
    const { match, openOrders } = this.props
    const order = openOrders.find(o => match.params.id === o.id)
    this.setState({ order })
  }

  handleSubmit (e, order) {
    e.preventDefault()

    const { match, updateOrder } = this.props

    updateOrder(match.params.id, order)
    this.props.history.push('/open-orders')
  }

  render () {
    const { order } = this.state

    return order ? (
      <OrderPage
        className='edit_order'
        heading='Edit Order'
        startingOrder={order}
        onSubmit={this.handleSubmit}
        formSubmitValue='Edit Order'
      />
    ) : null
  }
}

EditOrderContainer.propTypes = {
  match: PropTypes.object,
  openOrders: PropTypes.array,
  updateOrder: PropTypes.func,
  history: PropTypes.object
}

const mapStateToProps = state => ({
  openOrders: state.openOrders
})

const mapDispatchToProps = {
  updateOrder
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditOrderContainer))
