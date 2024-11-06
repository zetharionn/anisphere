import type { GenreImage } from './image'

export interface Genre {
	id: number
	name: string
	total_releases: number
	image: GenreImage
}
