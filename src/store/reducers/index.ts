import { combineReducers } from 'redux'

import { repositoriesReducer } from './repositories'
import { languagesReducer } from './languages'
import { contributorsReducer } from './contributors'

export const rootReducer = combineReducers({
  repositories: repositoriesReducer,
  languages: languagesReducer,
  contributors: contributorsReducer,
})

export type RootState = ReturnType<typeof rootReducer>
