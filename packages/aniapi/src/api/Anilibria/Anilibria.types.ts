import type {
	AnimeParams,
	LatestParams,
	RandomParams,
	SearchParams
} from './methods'
import type { Release } from './types'

export interface IAnilibria {
	anime: (params: AnimeParams) => Promise<Release>
	random: (params: RandomParams) => Promise<Release[]>
	search: (params: SearchParams) => Promise<Release[]>
	latest: (params: LatestParams) => Promise<Release[]>
}
