import type { IAnilibria } from './Anilibria.types'
import { Anime, Latest, Random, Search } from './methods'
import type {
	RandomParams,
	AnimeParams,
	SearchParams,
	LatestParams
} from './methods'

export class Anilibria implements IAnilibria {
	public anime(params: AnimeParams) {
		return Anime(params)
	}
	public random(params?: RandomParams) {
		return Random(params)
	}
	public search(params: SearchParams) {
		return Search(params)
	}
	public latest(params?: LatestParams) {
		return Latest(params)
	}
}
