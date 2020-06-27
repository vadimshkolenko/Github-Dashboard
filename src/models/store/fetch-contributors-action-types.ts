import {
  FETCH_CONTRIBUTORS_START,
  FETCH_CONTRIBUTORS_SUCCESS,
  FETCH_CONTRIBUTORS_FAIL,
} from './../../store/common'
import { ContributorsData } from './contributor'

interface FetchContributorsStartActionType {
  type: typeof FETCH_CONTRIBUTORS_START
}

interface FetchContributorsSuccessActionType {
  type: typeof FETCH_CONTRIBUTORS_SUCCESS
  response: Array<ContributorsData>
}

interface FetchContributorsFailActionType {
  type: typeof FETCH_CONTRIBUTORS_FAIL
  error: null | string
}

export type FetchContributorsActionTypes =
  | FetchContributorsStartActionType
  | FetchContributorsSuccessActionType
  | FetchContributorsFailActionType
