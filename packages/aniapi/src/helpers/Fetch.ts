export const Fetch = async <T>(
	input: string | URL | globalThis.Request,
	responseMode: 'json' | 'text' = 'json',
	init?: RequestInit
): Promise<T> => {
	return (await fetch(input, init).then(res => {
		return responseMode === 'json' ? res.json() : res.text()
	})) as Promise<T>
}
