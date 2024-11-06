import { Fetch, QueryParams } from '@/helpers'
import { Endpoints } from '../../constants'
import type { ReleaseParams } from './Release.types'

export const Release = (params?: ReleaseParams) => {
	return Fetch(Endpoints.RELEASE + QueryParams<ReleaseParams>(params, 'params'))
}
