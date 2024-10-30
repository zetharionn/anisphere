import toast from 'react-hot-toast'
import type { IToastService } from './toast.types'

export class ToastService implements IToastService {
	error(errorObject: Error) {
		toast.error(errorObject.message)
	}
}
