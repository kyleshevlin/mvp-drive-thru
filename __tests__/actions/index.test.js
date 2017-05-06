import * as actions from '../../src/js/actions'
import * as types from '../../src/js/constants/actionTypes'

describe('Actions', () => {
  it('createOrder should return POJO with correct type, an id, and order', () => {
    const order = { test: 'food' }
    const action = actions.createOrder(order)

    expect(typeof action).toBe('object')
    expect(action.type).toBe(types.CREATE_ORDER)
    expect(action.id).toBeDefined()
    expect(typeof action.id).toBe('string')
    expect(action.order).toEqual(order)
  })

  it('completeOrder should return POJO with correct type and order id', () => {
    const orderId = 1
    const action = actions.completeOrder(orderId)

    expect(typeof action).toBe('object')
    expect(action.type).toBe(types.COMPLETE_ORDER)
    expect(action.id).toEqual(orderId)
  })

  it('cancelOrder should return POJO with correct type and order id', () => {
    const orderId = 1
    const action = actions.cancelOrder(orderId)

    expect(typeof action).toBe('object')
    expect(action.type).toBe(types.CANCEL_ORDER)
    expect(action.id).toEqual(orderId)
  })

  it('updateOrder should return POJO with correct type, id and update', () => {
    const orderId = 1
    const update = { test: 'updated food' }
    const action = actions.updateOrder(orderId, update)

    expect(typeof action).toBe('object')
    expect(action.type).toBe(types.UPDATE_ORDER)
    expect(action.id).toEqual(orderId)
    expect(action.update).toEqual(update)
  })
})
