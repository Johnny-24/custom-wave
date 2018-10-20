import { combineReducers } from 'redux'
import player from './player'
import station from './station'
import counter from './counter'

export default combineReducers({
  player,
  station,
  counter,
})
