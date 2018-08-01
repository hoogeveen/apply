import { combineReducers } from 'redux'
import account from './account'
import apply from './apply'
import characters from './characters'

const todoApp = combineReducers({
  account,
  characters,
  apply
})

export default todoApp
