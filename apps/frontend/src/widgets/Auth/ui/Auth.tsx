import { AuthForm, type AuthType } from '@features/AuthForm'
import type { FC } from 'react'

export interface IAuth {
	type: AuthType
}

export const Auth: FC<IAuth> = ({ type }) => {
	return (
		<div className='flex flex-col gap-4'>
			<div className='flex flex-col text-center'>
				<h1 className='md:text-3xl sm:text-2xl font-medium'>
					<span>Continue to </span>
					<span className='font-semibold text-transparent bg-clip-text bg-gradient-to-br from-[#ffa500] to-[#8400ff]'>
						AniSphere
					</span>
				</h1>
			</div>
			<AuthForm type={type} />
		</div>
	)
}
