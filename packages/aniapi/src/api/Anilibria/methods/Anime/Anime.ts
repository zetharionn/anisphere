import { Fetch, QueryParams } from '@/helpers'
import { Endpoints } from '../../constants'
import type { AnimeParams } from './Anime.types'
import type { Release } from '../../types'

export const Anime = (params?: AnimeParams) => {
	return Fetch<Release>(
		Endpoints.RELEASE + QueryParams<AnimeParams>(params, 'params')
	)
}
