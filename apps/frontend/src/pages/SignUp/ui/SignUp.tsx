import { useAuthStore } from '@entities/user'
import { ROUTES } from '@shared/lib'
import { Auth } from '@widgets/Auth'
import { Navigate } from 'react-router-dom'

const SignUp = () => {
	const isAuth = useAuthStore(state => state.isAuth)

	return (
		<div className='flex items-center justify-center h-[85vh]'>
			{isAuth && <Navigate to={ROUTES.HOME} />}
			<div className='flex flex-col gap-4 lg:w-[20vw] md:w-[40vw] sm:w-[60vw]'>
				<Auth type='signUp' />
			</div>
		</div>
	)
}

export default SignUp
