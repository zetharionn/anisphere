import toast from 'react-hot-toast'
import type { ErrorObject, IToastService, SuccessObject } from './toast.types'

export class ToastService implements IToastService {
	success(successObject?: SuccessObject) {
		toast.success(successObject?.message ?? 'Success', successObject?.options)
	}

	error(errorObject?: ErrorObject) {
		toast.error(errorObject?.message ?? 'Error', errorObject?.options)
	}
}
