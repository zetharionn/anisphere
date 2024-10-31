import type { ToastOptions } from 'react-hot-toast'

export interface IToastService {
	success: (successObject?: SuccessObject) => void
	error: (errorObject?: ErrorObject) => void
}

export interface SuccessObject {
	message?: string
	options?: ToastOptions
}

export interface ErrorObject extends Error {
	options?: ToastOptions
}
