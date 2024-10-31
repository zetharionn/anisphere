import type { ToastOptions } from 'react-hot-toast'

export interface IToastService {
	blank: (blankObject?: BlankObject) => void
	success: (successObject?: SuccessObject) => void
	error: (errorObject?: ErrorObject) => void
}

export interface BlankObject {
	message?: string
	options?: ToastOptions
}

export interface SuccessObject {
	message?: string
	options?: ToastOptions
}

export interface ErrorObject extends Error {
	options?: ToastOptions
}
