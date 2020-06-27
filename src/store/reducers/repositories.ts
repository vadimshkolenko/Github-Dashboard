import { FetchRepositoriesActionTypes } from './../../models/store/fetch-repositories-action-types'
import { RepositoriesState } from './../../models/store/repository'
import {
  FETCH_REPOSITORIES_START,
  FETCH_REPOSITORIES_SUCCESS,
  FETCH_REPOSITORIES_FAIL,
} from './../common'

const initialState: RepositoriesState = {
  loading: false,
  loaded: false,
  error: null,
  entities: [],
}

export const repositoriesReducer = (
  repositoriesState = initialState,
  action: FetchRepositoriesActionTypes
): RepositoriesState => {
  switch (action.type) {
    case FETCH_REPOSITORIES_START:
      return {
        ...repositoriesState,
        loading: true,
      }
    case FETCH_REPOSITORIES_SUCCESS:
      return {
        ...repositoriesState,
        loading: false,
        loaded: true,
        error: null,
        entities: action.response,
      }
    case FETCH_REPOSITORIES_FAIL:
      return {
        ...repositoriesState,
        loading: false,
        loaded: false,
        error: action.error,
      }
    default:
      return repositoriesState
  }
}
