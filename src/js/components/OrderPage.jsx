import React, { Component } from 'react'
import PropTypes from 'prop-types'
import OrderForm from './OrderForm'

class OrderPage extends Component {
  constructor (props) {
    super(props)

    this.state = {
      order: props.startingOrder
    }

    this.handleCheckboxChange = this.handleCheckboxChange.bind(this)
    this.handleBunsChange = this.handleBunsChange.bind(this)
    this.handlePattiesChange = this.handlePattiesChange.bind(this)
    this.handleCheesesChange = this.handleCheesesChange.bind(this)
    this.handleCondimentsChange = this.handleCondimentsChange.bind(this)
    this.handleDrinkChange = this.handleDrinkChange.bind(this)
  }

  handleCheckboxChange (e) {
    this.setState({ order: {
      ...this.state.order,
      [e.target.name]: !this.state.order[e.target.name]
    }})
  }

  handleBunsChange (bun) {
    this.setState({ order: {
      ...this.state.order,
      burger: {
        ...this.state.order.burger,
        bun
      }
    }})
  }

  handlePattiesChange (patty) {
    this.setState({ order: {
      ...this.state.order,
      burger: {
        ...this.state.order.burger,
        patty
      }
    }})
  }

  handleCheesesChange (cheese) {
    this.setState({ order: {
      ...this.state.order,
      burger: {
        ...this.state.order.burger,
        cheese
      }
    }})
  }

  handleCondimentsChange (condiments) {
    this.setState({ order: {
      ...this.state.order,
      burger: {
        ...this.state.order.burger,
        condiments
      }
    }})
  }

  handleDrinkChange (drink) {
    this.setState({ order: {
      ...this.state.order,
      drink
    }})
  }

  render () {
    const {
      className,
      heading,
      onSubmit,
      formSubmitValue
    } = this.props
    const { order } = this.state
    const submitIsDisabled = !(order.havingBurger || order.havingFries || order.havingDrink)

    return (
      <div className={className}>
        <h1>{heading}</h1>

        <OrderForm
          order={order}
          onSubmit={(e) => { onSubmit(e, order) }}
          onCheckboxChange={this.handleCheckboxChange}
          onBunChange={this.handleBunsChange}
          onPattyChange={this.handlePattiesChange}
          onCheeseChange={this.handleCheesesChange}
          onCondimentsChange={this.handleCondimentsChange}
          onDrinkChange={this.handleDrinkChange}
          formSubmitValue={formSubmitValue}
          submitIsDisabled={submitIsDisabled}
        />
      </div>
    )
  }
}

OrderPage.propTypes = {
  className: PropTypes.string,
  heading: PropTypes.string,
  startingOrder: PropTypes.object,
  onSubmit: PropTypes.func,
  formSubmitValue: PropTypes.string
}

export default OrderPage
