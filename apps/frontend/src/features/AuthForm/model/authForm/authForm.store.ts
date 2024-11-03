import { create } from 'zustand'
import type { IAuthFormStore, Mode } from './authForm.types'

export const useAuthFormStore = create<IAuthFormStore>()(set => ({
	formMode: 'options',
	changeFormMode: (mode: Mode) => set({ formMode: mode })
}))
