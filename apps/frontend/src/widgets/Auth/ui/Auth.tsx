import { AuthForm, useAuthFormStore } from '@features/AuthForm'
import { Link } from '@nextui-org/react'
import { ROUTES } from '@shared/lib'
import { type FC, memo } from 'react'

export const Auth: FC = memo(() => {
	const formType = useAuthFormStore(state => state.formType)

	return (
		<div className='flex flex-col gap-4'>
			<div className='text-start'>
				<h1 className='sm:text-2xl md:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-br from-[#ffa500] to-[#8400ff]'>
					{formType === 'signIn' ? 'Sign In' : 'Sign Up'}
				</h1>
			</div>
			<AuthForm />
			<div className='text-center'>
				<Link href={formType === 'signUp' ? ROUTES.SIGN_IN : ROUTES.SIGN_UP}>
					<span className='text-primary'>
						{formType === 'signUp'
							? 'Already have an account?'
							: 'Need to create an account?'}
					</span>
				</Link>
			</div>
		</div>
	)
})
