import type { AuthMode, AuthType } from '../../lib'

export interface IAuthFormStore {
	formMode: AuthMode
	formType: AuthType
	changeFormMode: (mode: AuthMode) => void
	changeFormType: (type: AuthType) => void
}
