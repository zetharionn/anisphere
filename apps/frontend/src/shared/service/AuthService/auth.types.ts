import type {
	AuthChangeEvent,
	AuthError,
	Provider,
	Session,
	Subscription,
	SupabaseClient,
	User
} from '@supabase/supabase-js'

export interface IAuthService {
	readonly supabaseClient: SupabaseClient
	signUp: (email: string, password: string) => Promise<AuthResponse>
	signIn: (email: string, password: string) => Promise<AuthResponse>
	signInWithOAuth: (provider: Provider) => Promise<AuthResponse>
	signOut: () => Promise<AuthResponse>
	getSession: () => Promise<SessionResponse>
	getUser: () => Promise<UserResponse>
	listenAuthEvent: (
		callback: (event?: AuthChangeEvent, session?: Session | null) => void,
		authEvent?: AuthChangeEvent
	) => Promise<AuthEventResponse>
}

export interface AuthResponse {
	error: AuthError | null
}

export interface SessionResponse extends AuthResponse {
	session: Session | null
}

export interface UserResponse extends AuthResponse {
	user: User | null
}

export interface AuthEventResponse {
	subscription: Subscription
}
