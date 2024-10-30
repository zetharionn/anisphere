import type {
	AuthChangeEvent,
	Provider,
	Session,
	SupabaseClient
} from '@supabase/supabase-js'
import type { AuthEvents, IAuthService } from './auth.types'

export class AuthService implements IAuthService {
	readonly supabaseClient: SupabaseClient
	constructor(supabase: SupabaseClient) {
		this.supabaseClient = supabase
	}

	async signUp(email: string, password: string) {
		const { error } = await this.supabaseClient.auth.signUp({
			email,
			password
		})
		return { error }
	}

	async signIn(email: string, password: string) {
		const { error } = await this.supabaseClient.auth.signInWithPassword({
			email,
			password
		})
		return { error }
	}

	async signInWithOAuth(provider: Provider) {
		const { error } = await this.supabaseClient.auth.signInWithOAuth({
			provider
		})
		return { error }
	}

	async signOut() {
		const { error } = await this.supabaseClient.auth.signOut()
		return { error }
	}

	async getSession() {
		const {
			data: { session },
			error
		} = await this.supabaseClient.auth.getSession()
		return { session, error }
	}

	async getUser() {
		const {
			data: { user },
			error
		} = await this.supabaseClient.auth.getUser()
		return { user, error }
	}

	async listenAuthEvent(
		callback: (event?: AuthChangeEvent, session?: Session | null) => void,
		authEvent?: AuthEvents
	) {
		const {
			data: { subscription }
		} = this.supabaseClient.auth.onAuthStateChange((event, session) => {
			callback(authEvent ?? event, session)
		})
		return { subscription }
	}
}
