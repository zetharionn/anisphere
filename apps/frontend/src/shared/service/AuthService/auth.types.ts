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
		authEvent?: AuthEvents
	) => Promise<AuthEventResponse>
}

export enum AuthEvents {
	INITIAL_SESSION = 'INITIAL_SESSION',
	MFA_CHALLENGE_VERIFIED = 'MFA_CHALLENGE_VERIFIED',
	PASSWORD_RECOVERY = 'PASSWORD_RECOVERY',
	SIGNED_IN = 'SIGNED_IN',
	SIGNED_OUT = 'SIGNED_OUT',
	TOKEN_REFRESHED = 'TOKEN_REFRESHED',
	USER_UPDATED = 'USER_UPDATED'
}

export interface AuthResponse {
	error: AuthError | null
}

export interface SessionResponse {
	session: Session | null
	error: AuthError | null
}

export interface UserResponse {
	user: User | null
	error: AuthError | null
}

export interface AuthEventResponse {
	subscription: Subscription
}
