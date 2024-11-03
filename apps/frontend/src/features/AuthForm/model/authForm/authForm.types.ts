export interface IAuthFormStore {
	formMode: Mode
	changeFormMode: (mode: Mode) => void
}

export type Mode = 'options' | 'email'
