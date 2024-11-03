import { useAuthStore } from '@entities/user'
import { useAuthFormStore } from '@features/AuthForm'
import { ROUTES } from '@shared/lib'
import { Auth } from '@widgets/Auth'
import { useEffect } from 'react'
import { Navigate } from 'react-router-dom'

const SignIn = () => {
	const isAuth = useAuthStore(state => state.isAuth)
	const changeFormType = useAuthFormStore(state => state.changeFormType)

	useEffect(() => {
		changeFormType('signIn')
	}, [changeFormType])

	return (
		<div className='flex items-center justify-center h-[85vh]'>
			{isAuth && <Navigate to={ROUTES.HOME} />}
			<div className='flex flex-col gap-4 lg:w-[20vw] md:w-[40vw] sm:w-[60vw]'>
				<Auth />
			</div>
		</div>
	)
}

export default SignIn
