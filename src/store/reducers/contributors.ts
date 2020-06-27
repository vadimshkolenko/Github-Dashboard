import { FetchContributorsActionTypes } from './../../models/store/fetch-contributors-action-types'
import { ContributorsState } from './../../models/store/contributor'
import {
  FETCH_CONTRIBUTORS_START,
  FETCH_CONTRIBUTORS_SUCCESS,
  FETCH_CONTRIBUTORS_FAIL,
} from './../common'

const initialState: ContributorsState = {
  loading: false,
  loaded: false,
  error: null,
  entities: [],
}

export const contributorsReducer = (
  contributorsState = initialState,
  action: FetchContributorsActionTypes
): ContributorsState => {
  switch (action.type) {
    case FETCH_CONTRIBUTORS_START:
      return {
        ...contributorsState,
        loading: true,
      }
    case FETCH_CONTRIBUTORS_SUCCESS:
      return {
        ...contributorsState,
        loading: false,
        loaded: true,
        error: null,
        entities: action.response,
      }
    case FETCH_CONTRIBUTORS_FAIL:
      return {
        ...contributorsState,
        loading: false,
        loaded: false,
        error: action.error,
      }
    default:
      return contributorsState
  }
}
