import { GET_STATION } from './../constants'

const initialState = []

export default (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case GET_STATION:
      return [...state, payload]

    default:
      break
  }
  return state
}
