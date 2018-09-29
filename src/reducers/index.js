import { combineReducers } from 'redux'
import player from './player'
import station from './station'

export default combineReducers({
  player,
  station,
})
