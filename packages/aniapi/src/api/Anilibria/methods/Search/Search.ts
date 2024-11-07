import { Fetch, QueryParams } from '@/helpers'
import { Endpoints } from '../../constants'
import type { Release } from '../../types'
import type { SearchParams } from './Search.types'

export const Search = (params: SearchParams) => {
	return Fetch<Release[]>(
		Endpoints.APP_SEARCH + QueryParams<SearchParams>(params, 'query')
	)
}
