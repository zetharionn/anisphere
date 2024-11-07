import { Fetch, QueryParams } from '@/helpers'
import { Endpoints } from '../../constants'
import type { Release } from '../../types'
import type { LatestParams } from './Latest.types'

export const Latest = (params?: LatestParams) => {
	return Fetch<Release[]>(
		Endpoints.RELEASE_LATEST + QueryParams<LatestParams>(params, 'query')
	)
}
