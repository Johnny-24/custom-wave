import { STATUS_PLAYER } from '../constants'

export function handleStatusPlayer(status) {
  return {
    type: STATUS_PLAYER,
    payload: { status },
  }
}
