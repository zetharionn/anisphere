import toast from 'react-hot-toast'
import type {
	BlankObject,
	ErrorObject,
	IToastService,
	SuccessObject
} from './toast.types'

export class ToastService implements IToastService {
	blank(blankObject?: BlankObject) {
		toast(blankObject?.message ?? 'Blank', blankObject?.options)
	}

	success(successObject?: SuccessObject) {
		toast.success(successObject?.message ?? 'Success', successObject?.options)
	}

	error(errorObject?: ErrorObject) {
		toast.error(errorObject?.message ?? 'Error', errorObject?.options)
	}
}
