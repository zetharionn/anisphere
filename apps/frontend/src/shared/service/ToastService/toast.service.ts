import toast from 'react-hot-toast'
import type { IToastService, SuccessObject } from './toast.types'

export class ToastService implements IToastService {
	success(successObject?: SuccessObject) {
		toast.success(successObject?.message ?? 'Success', successObject?.options)
	}

	error(errorObject: Error) {
		toast.error(errorObject.message)
	}
}
