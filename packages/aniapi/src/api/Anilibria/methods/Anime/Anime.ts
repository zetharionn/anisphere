import { Fetch, QueryParams } from '@/helpers'
import { Endpoints } from '../../constants'
import type { Release } from '../../types'
import type { AnimeParams } from './Anime.types'

export const Anime = (params?: AnimeParams) => {
	return Fetch<Release>(
		Endpoints.RELEASE + QueryParams<AnimeParams>(params, 'params')
	)
}
