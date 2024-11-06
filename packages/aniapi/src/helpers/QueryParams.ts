export const QueryParams = <T extends Record<string, string | number>>(
	query?: T,
	queryMode: 'query' | 'params' = 'query'
) => {
	if (!query) return ''
	const stringifiedQuery = Object.fromEntries(
		Object.entries(query).map(([key, value]) => [key, value.toString()])
	)
	return queryMode === 'query'
		? `?${new URLSearchParams(stringifiedQuery).toString()}`
		: `/${Object.values(query).map(value => value.toString())}`
}
