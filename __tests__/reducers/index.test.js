import reducer from '../../src/js/reducers'
import * as actions from '../../src/js/actions'

describe('Reducer', () => {
  it('returns state when action is unaccounted for', () => {
    const initialState = { test: 'food' }
    const action = { type: 'UNACCOUNTED_ACTION' }
    const nextState = reducer(initialState, action)

    expect(nextState).toEqual(initialState)
  })

  describe('createOrder', () => {
    it('createOrder adds item to openOrders when called successfully', () => {
      const initialState = { openOrders: [] }
      const order = { test: 'food' }
      const action = actions.createOrder(order)
      const nextState = reducer(initialState, action)
      const expectedState = {
        openOrders: [{ id: action.id, ...order }]
      }

      expect(nextState).toEqual(expectedState)
    })
  })

  describe('completeOrder', () => {
    it('adds item to completedOrders when called successfully', () => {
      const initialState = {
        openOrders: [{ id: 1 }, { id: 2 }],
        completedOrders: []
      }
      const action = actions.completeOrder(1)
      const nextState = reducer(initialState, action)
      const expectedState = {
        openOrders: [{ id: 2 }],
        completedOrders: [{ id: 1 }]
      }

      expect(nextState).toEqual(expectedState)
    })
  })

  it('cancelOrder adds item to canceledOrders when called successfully', () => {
    const initialState = {
      openOrders: [{ id: 1 }, { id: 2 }],
      canceledOrders: []
    }
    const action = actions.cancelOrder(1)
    const nextState = reducer(initialState, action)
    const expectedState = {
      openOrders: [{ id: 2 }],
      canceledOrders: [{ id: 1 }]
    }

    expect(nextState).toEqual(expectedState)
  })

  it('updateOrder updates the correct order in openOrders', () => {
    const initialState = {
      openOrders: [{ id: 1, food: 'pizza' }, { id: 2, food: 'burger' }]
    }
    const update = { food: 'ice cream' }
    const action = actions.updateOrder(1, update)
    const nextState = reducer(initialState, action)
    const expectedState = {
      openOrders: [{ id: 1, food: 'ice cream' }, { id: 2, food: 'burger' }]
    }

    expect(nextState).toEqual(expectedState)
  })
})
