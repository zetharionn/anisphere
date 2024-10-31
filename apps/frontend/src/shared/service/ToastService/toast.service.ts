import toast from 'react-hot-toast'
import type {
	BlankObject,
	ErrorObject,
	IToastService,
	PromiseObject,
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

	promise(promiseObject?: PromiseObject) {
		toast.promise(
			promiseObject?.promise ?? new Promise(() => {}),
			promiseObject?.messages ?? {
				loading: 'Loading',
				success: 'Success',
				error: 'Error'
			},
			promiseObject?.options
		)
	}
}
