export interface Image {
	src: string
	thumbnail: string
	optimized: Omit<Image, 'optimized'>
}

export type GenreImage = {
	preview: string
} & Omit<Image, 'src'>
