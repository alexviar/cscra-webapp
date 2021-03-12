import { combineReducers } from 'redux'
import entities from './entities'
import ui from './ui'
import requests from './requests'

export const iamModuleReducer = combineReducers({
  entities,
  ui,
  requests
})

export type IamModuleAwareState = {
  iam: ReturnType<typeof iamModuleReducer>
}

export default iamModuleReducer