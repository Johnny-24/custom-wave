import { INCREMENT, DECREMENT } from './../constants'

const initialState = 0

export default (state = initialState, action) => {
  const { type } = action
  switch (type) {
    case INCREMENT:
      return state + 1
    case DECREMENT:
      return state - 1
    default:
      break
  }
  return state
}
