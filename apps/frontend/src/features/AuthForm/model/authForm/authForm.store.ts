import { create } from 'zustand'
import type { IAuthFormStore } from './authForm.types'

export const useAuthFormStore = create<IAuthFormStore>()(set => ({
	formMode: 'options',
	formType: 'signUp',
	changeFormMode: mode => set({ formMode: mode }),
	changeFormType: type => set({ formType: type })
}))
