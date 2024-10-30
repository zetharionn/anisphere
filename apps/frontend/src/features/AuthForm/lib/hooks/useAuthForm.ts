import { useAuthStore } from '@entities/user'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { AuthSchema, type AuthSchemaType, type AuthType } from '../constants'

export const useAuthForm = (type: AuthType) => {
	const {
		handleSubmit,
		formState: { errors },
		register
	} = useForm<AuthSchemaType>({
		resolver: zodResolver(AuthSchema)
	})

	const signUp = useAuthStore(state => state.signUp)
	const signIn = useAuthStore(state => state.signIn)

	const onSubmit = handleSubmit(data => {
		type === 'signUp' && signUp(data.email, data.password)
		type === 'signIn' && signIn(data.email, data.password)
	})

	return { onSubmit, formState: { errors }, register }
}
