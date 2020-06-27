export interface ContributorsState {
  loading: boolean
  loaded: boolean
  error: null | string
  entities: Array<ContributorsData>
}

export interface ContributorsData {
  id: number
  login: string
  avatar_url: string
  html_url: string
}
