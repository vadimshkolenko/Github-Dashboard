import {
  FETCH_REPOSITORIES_START,
  FETCH_REPOSITORIES_SUCCESS,
  FETCH_REPOSITORIES_FAIL,
} from './../../store/common'
import { RepositoriesData } from './repository'

interface FetchRepositoriesStartActionType {
  type: typeof FETCH_REPOSITORIES_START
}

interface FetchRepositoriesSuccessActionType {
  type: typeof FETCH_REPOSITORIES_SUCCESS
  response: Array<RepositoriesData>
}

interface FetchRepositoriesFailActionType {
  type: typeof FETCH_REPOSITORIES_FAIL
  error: null | string
}

export type FetchRepositoriesActionTypes =
  | FetchRepositoriesStartActionType
  | FetchRepositoriesSuccessActionType
  | FetchRepositoriesFailActionType
