import {
  FETCH_REPOSITORIES_START,
  FETCH_REPOSITORIES_SUCCESS,
  FETCH_REPOSITORIES_FAIL,
  SET_QUERY,
  SET_PAGE,
} from './../../store/common'
import { RepositoriesData } from './repository'

interface FetchRepositoriesStartActionType {
  type: typeof FETCH_REPOSITORIES_START
}

interface FetchRepositoriesSuccessActionType {
  type: typeof FETCH_REPOSITORIES_SUCCESS
  response: RepositoriesData
}

interface FetchRepositoriesFailActionType {
  type: typeof FETCH_REPOSITORIES_FAIL
  error: null | string
}

interface SetQueryActionType {
  type: typeof SET_QUERY
  payload: string
}

interface setPageActionType {
  type: typeof SET_PAGE
  payload: number
}

export type FetchRepositoriesActionTypes =
  | FetchRepositoriesStartActionType
  | FetchRepositoriesSuccessActionType
  | FetchRepositoriesFailActionType
  | SetQueryActionType
  | setPageActionType
