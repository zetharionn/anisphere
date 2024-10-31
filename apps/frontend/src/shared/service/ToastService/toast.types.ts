import type { ToastOptions } from 'react-hot-toast'

export interface IToastService {
	success: (successObject?: SuccessObject) => void
	error: (errorObject: Error) => void
}

export interface SuccessObject {
	message?: string
	options?: ToastOptions
}
