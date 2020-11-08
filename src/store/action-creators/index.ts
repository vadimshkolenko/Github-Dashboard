import { Dispatch } from 'redux'

import { FetchRepositoriesActionTypes } from './../../models/store/fetch-repositories-action-types'
import { FetchLanguagesActionTypes } from './../../models/store/fetch-languages-action-types'
import { FetchContributorsActionTypes } from './../../models/store/fetch-contributors-action-types'
import {
  FETCH_REPOSITORIES_START,
  FETCH_REPOSITORIES_SUCCESS,
  FETCH_REPOSITORIES_FAIL,
  FETCH_LANGUAGES_START,
  FETCH_LANGUAGES_SUCCESS,
  FETCH_LANGUAGES_FAIL,
  FETCH_CONTRIBUTORS_START,
  FETCH_CONTRIBUTORS_SUCCESS,
  FETCH_CONTRIBUTORS_FAIL,
  SET_QUERY,
  SET_PAGE,
} from './../common'

export const fetchRepositories = (query: string, page: number) => (
  dispatch: Dispatch<FetchRepositoriesActionTypes>
): void => {
  dispatch({
    type: FETCH_REPOSITORIES_START,
  })
  fetch(
    `https://api.github.com/search/repositories?q=${query}+stars:>0&sort=stars&order=desc&page=${page}&per_page=10`
  )
    .then((res) => res.json())
    .then((res) =>
      dispatch({
        type: FETCH_REPOSITORIES_SUCCESS,
        response: res,
      })
    )
    .catch((error) => {
      dispatch({
        type: FETCH_REPOSITORIES_FAIL,
        error,
      })
    })
}

export const fetchLanguages = (url: string) => (
  dispatch: Dispatch<FetchLanguagesActionTypes>
): void => {
  dispatch({
    type: FETCH_LANGUAGES_START,
  })
  fetch(url)
    .then((res) => res.json())
    .then((res) =>
      dispatch({
        type: FETCH_LANGUAGES_SUCCESS,
        response: res,
      })
    )
    .catch((error) => {
      dispatch({
        type: FETCH_LANGUAGES_FAIL,
        error,
      })
    })
}

export const fetchContributors = (url: string) => (
  dispatch: Dispatch<FetchContributorsActionTypes>
): void => {
  dispatch({
    type: FETCH_CONTRIBUTORS_START,
  })
  fetch(url)
    .then((res) => res.json())
    .then((res) =>
      dispatch({
        type: FETCH_CONTRIBUTORS_SUCCESS,
        response: res,
      })
    )
    .catch((error) => {
      dispatch({
        type: FETCH_CONTRIBUTORS_FAIL,
        error,
      })
    })
}

export const setQuery = (query: string) => ({
  type: SET_QUERY,
  payload: query,
})

export const setPage = (page: number) => ({
  type: SET_PAGE,
  payload: page,
})
