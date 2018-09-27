import { GET_PLAYER } from '../constants'

export function getPlayer(player, status) {
  return {
    type: GET_PLAYER,
    payload: { player, status },
  }
}
