export interface RepositoriesState {
  loading: boolean
  loaded: boolean
  error: null | string
  entities: Array<RepositoriesData>
}

export interface RepositoriesData {
  id: number
  name: string
  stargazers_count: number
  updated_at: string
  html_url: string
  owner: Owner
  description: string
  contributors_url: string
  languages_url: string
}

export interface Owner {
  avatar_url: string
  login: string
  html_url: string
}

export interface RepositoryCardTypes {
  id: number
  name: string
  stargazers_count: number
  updated_at: string
  html_url: string
}
