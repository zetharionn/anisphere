import { authService, toastService } from '@shared/service'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { IAuthStore } from './auth.types'

export const useAuthStore = create<IAuthStore>()(
	persist(
		set => ({
			isAuth: false,
			signUp(email: string, password: string) {
				authService.signUp(email, password).then(res => {
					if (res.error) {
						toastService.error(res.error)
						set({ isAuth: false })
					} else set({ isAuth: true })
				})
			},
			signIn(email: string, password: string) {
				authService.signIn(email, password).then(res => {
					if (res.error) {
						toastService.error(res.error)
						set({ isAuth: false })
					} else set({ isAuth: true })
				})
			},
			signInWithOAuth(provider) {
				authService.signInWithOAuth(provider).then(res => {
					if (res.error) {
						toastService.error(res.error)
						set({ isAuth: false })
					} else set({ isAuth: true })
				})
			},
			signOut() {
				authService.signOut().then(res => {
					if (res.error) {
						toastService.error(res.error)
					} else set({ isAuth: false })
				})
			},
			checkAuth() {
				authService.getUser().then(res => {
					if (res.error) {
						toastService.error(res.error)
						set({ isAuth: false })
					}
				})
			}
		}),
		{
			name: 'auth-store'
		}
	)
)
