import type { Provider } from '@supabase/supabase-js'

export interface IAuthStore {
	isAuth: boolean
	signUp: (email: string, password: string) => void
	signIn: (email: string, password: string) => void
	signInWithOAuth: (provider: Provider) => void
	signOut: () => void
	checkAuth: () => void
}
