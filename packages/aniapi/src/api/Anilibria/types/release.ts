import type { Age_Rating } from './age_rating'
import type { Episode } from './episode'
import type { Genre } from './genre'
import type { Image } from './image'
import type { Names } from './names'
import type { Publish_Day } from './publish_day'
import type { Season } from './season'
import type { Type } from './type'

export interface Release {
	id: number
	type: Type
	year: number
	name: Names
	alias: string
	season: Season
	poster: Image
	fresh_at: string
	created_at: string
	updated_at: string
	is_ongoing: boolean
	age_rating: Age_Rating
	publish_day: Publish_Day
	description: string
	notification: string
	episodes_total: number
	external_player: string
	is_in_production: boolean
	is_blocked_by_geo: boolean
	episodes_are_unknown: boolean
	is_blocked_by_copyrights: boolean
	average_duration_of_episode: number
	genres: Genre[]
	episodes: Episode[]
}
