import * as types from '../constants/actionTypes'
import shortid from 'shortid'

export function createOrder (order) {
  const id = shortid.generate()

  return {
    type: types.CREATE_ORDER,
    id,
    order
  }
}

export function completeOrder (id) {
  return {
    type: types.COMPLETE_ORDER,
    id
  }
}

export function cancelOrder (id) {
  return {
    type: types.CANCEL_ORDER,
    id
  }
}

export function updateOrder (id, update) {
  return {
    type: types.UPDATE_ORDER,
    id,
    update
  }
}
