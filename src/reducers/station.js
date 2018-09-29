import { GET_STATION } from './../constants'

const initialState = null

export default (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case GET_STATION:
      return payload

    default:
      break
  }
  return state
}
