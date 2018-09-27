import { GET_PLAYER, STATUS_PLAYER } from './../constants'

const initialState = null

export default (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case GET_PLAYER:
      return payload

    case STATUS_PLAYER:
      state.status = payload.status
      return state

    default:
      break
  }
  return state
}
