export const CACHE_REPOSITORIES = (language, data) => ({
  type: 'CACHE_REPOSITORIES',
  lang: language,
  data,
})

export const CACHE_REPOSITORY = (id, data) => ({
  type: 'CACHE_REPOSITORY',
  id,
  data,
})
