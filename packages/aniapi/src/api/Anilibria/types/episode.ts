import type { Image } from './image'
import type { Timing } from './timing'

export interface Episode {
	id: string
	name: string
	ordinal: number
	opening: Timing
	ending: Timing
	preview: Image
	hls_480: string
	hls_720: string
	hls_1080: string
	duration: number
	updated_at: string
	sort_order: number
	name_english: string
}
