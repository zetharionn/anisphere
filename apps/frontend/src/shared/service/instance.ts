import { createClient } from '@supabase/supabase-js'
import { AuthService } from './AuthService'
import { ToastService } from './ToastService'

const supabase = createClient(
	`${import.meta.env.VITE_SUPABASE_URL}`,
	`${import.meta.env.VITE_SUPABASE_ANON_KEY}`
)

export const authService = new AuthService(supabase)
export const toastService = new ToastService()
