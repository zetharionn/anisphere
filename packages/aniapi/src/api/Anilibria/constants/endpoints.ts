import { URI } from './uri'

const APP = `${URI.ANILIBRIA_API_URI}/app`
const ANIME = `${URI.ANILIBRIA_API_URI}/anime`
const CATALOG = `${ANIME}/catalog`
const GENRES = `${ANIME}/genres`
const RELEASE = `${ANIME}/releases`
const SCHEDULE = `${ANIME}/schedule`

export const Endpoints = {
	APP,
	ANIME,
	CATALOG,
	GENRES,
	RELEASE,
	SCHEDULE,
	APP_SEARCH: `${APP}/search/release`,
	GENRES_RANDOM: `${GENRES}/random`,
	RELEASE_LATEST: `${RELEASE}/latest`,
	RELEASE_RANDOM: `${RELEASE}/random`,
	RELEASE_EPISODES: `${RELEASE}/episodes`,
	SCHEDULE_NOW: `${SCHEDULE}/now`,
	SCHEDULE_WEEK: `${SCHEDULE}/week`
}
