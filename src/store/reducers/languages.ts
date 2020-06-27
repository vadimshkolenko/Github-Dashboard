import { FetchLanguagesActionTypes } from './../../models/store/fetch-languages-action-types'
import { LanguagesState } from './../../models/store/language'
import {
  FETCH_LANGUAGES_START,
  FETCH_LANGUAGES_SUCCESS,
  FETCH_LANGUAGES_FAIL,
} from './../common'

const initialState: LanguagesState = {
  loading: false,
  loaded: false,
  error: null,
  entities: [],
}

export const languagesReducer = (
  languagesState = initialState,
  action: FetchLanguagesActionTypes
): LanguagesState => {
  switch (action.type) {
    case FETCH_LANGUAGES_START:
      return {
        ...languagesState,
        loading: true,
      }
    case FETCH_LANGUAGES_SUCCESS:
      return {
        ...languagesState,
        loading: false,
        loaded: true,
        error: null,
        entities: action.response,
      }
    case FETCH_LANGUAGES_FAIL:
      return {
        ...languagesState,
        loading: false,
        loaded: false,
        error: action.error,
      }
    default:
      return languagesState
  }
}
