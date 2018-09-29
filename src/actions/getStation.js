import { GET_STATION } from '../constants'

export function getStation(id, title, url) {
  return {
    type: GET_STATION,
    payload: { id, title, url },
  }
}
