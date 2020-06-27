import {
  FETCH_LANGUAGES_START,
  FETCH_LANGUAGES_SUCCESS,
  FETCH_LANGUAGES_FAIL,
} from './../../store/common'

interface FetchLanguagesStartActionType {
  type: typeof FETCH_LANGUAGES_START
}

interface FetchLanguagesSuccessActionType {
  type: typeof FETCH_LANGUAGES_SUCCESS
  response: any
}

interface FetchLanguagesFailActionType {
  type: typeof FETCH_LANGUAGES_FAIL
  error: null | string
}

export type FetchLanguagesActionTypes =
  | FetchLanguagesStartActionType
  | FetchLanguagesSuccessActionType
  | FetchLanguagesFailActionType
