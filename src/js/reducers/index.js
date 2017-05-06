import * as types from '../constants/actionTypes'

const initialState = {
  canceledOrders: [],
  completedOrders: [],
  openOrders: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CREATE_ORDER: {
      const { id, order } = action

      return {
        ...state,
        openOrders: [ ...state.openOrders, { id, ...order } ]
      }
    }

    case types.COMPLETE_ORDER: {
      const { completedOrders, openOrders } = state
      const orderToCompleteIndex = openOrders.findIndex(order => order.id === action.id)

      return {
        ...state,
        completedOrders: [
          ...completedOrders,
          openOrders[orderToCompleteIndex]
        ],
        openOrders: [
          ...openOrders.slice(0, orderToCompleteIndex),
          ...openOrders.slice(orderToCompleteIndex + 1)
        ]
      }
    }

    case types.CANCEL_ORDER: {
      const { canceledOrders, openOrders } = state
      const orderToCompleteIndex = openOrders.findIndex(order => order.id === action.id)

      return {
        ...state,
        canceledOrders: [
          ...canceledOrders,
          openOrders[orderToCompleteIndex]
        ],
        openOrders: [
          ...openOrders.slice(0, orderToCompleteIndex),
          ...openOrders.slice(orderToCompleteIndex + 1)
        ]
      }
    }

    case types.UPDATE_ORDER: {
      const { openOrders } = state
      const orderToUpdateIndex = openOrders.findIndex(order => order.id === action.id)

      return {
        ...state,
        openOrders: [
          ...openOrders.slice(0, orderToUpdateIndex),
          { ...openOrders[orderToUpdateIndex], ...action.update },
          ...openOrders.slice(orderToUpdateIndex + 1)
        ]
      }
    }

    default:
      return state
  }
}

export default reducer
