import { Fetch, QueryParams } from '@/helpers'
import { Endpoints } from '../../constants'
import type { Release } from '../../types'
import type { RandomParams } from './Random.types'

export const Random = (params?: RandomParams) => {
	return Fetch<Release[]>(
		Endpoints.RELEASE_RANDOM + QueryParams<RandomParams>(params, 'query')
	)
}
