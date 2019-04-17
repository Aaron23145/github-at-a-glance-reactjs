export const CACHE_REPO_LIST = (language, data) => ({
  type: 'CACHE_REPO_LIST',
  lang: language,
  data,
})

export const CACHE_REPO_DETAILS = (id, data) => ({
  type: 'CACHE_REPO_DETAILS',
  id,
  data,
})
