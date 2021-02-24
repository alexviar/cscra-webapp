import { combineReducers } from 'redux'
import entities from './entities'
import ui from './ui'

export const organization = combineReducers({
  entities,
  ui
})

export type OrganizationState = ReturnType<typeof organization>

export default organization