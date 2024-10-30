import { useAuthStore } from '@entities/user'
import { Button, Divider, Image, Input } from '@nextui-org/react'
import { discordMark, gitHubMark } from '@shared/ui/assets'
import { type FC, memo } from 'react'
import { type AuthType, useAuthForm } from '../lib'

export interface IAuthForm {
	type: AuthType
}

export const AuthForm: FC<IAuthForm> = memo(({ type }) => {
	const {
		onSubmit,
		formState: { errors },
		register
	} = useAuthForm(type)
	const signInWithOAuth = useAuthStore(state => state.signInWithOAuth)

	return (
		<form className='flex flex-col gap-3' onSubmit={onSubmit}>
			<Button
				onClick={() => signInWithOAuth('github')}
				variant='bordered'
				radius='sm'
				startContent={<Image src={gitHubMark} width={25} />}
			>
				Continue with GitHub
			</Button>
			<Button
				onClick={() => signInWithOAuth('discord')}
				variant='bordered'
				radius='sm'
				startContent={<Image src={discordMark} width={25} />}
			>
				Continue with Discord
			</Button>
			<Divider />
			<Input
				{...register('email')}
				isRequired
				type='email'
				variant='bordered'
				radius='sm'
				label='Email'
				isInvalid={!!errors.email}
				errorMessage={errors.email?.message}
			/>
			<Input
				{...register('password')}
				isRequired
				type='password'
				variant='bordered'
				radius='sm'
				label='Password'
				isInvalid={!!errors.password}
				errorMessage={errors.password?.message}
			/>
			<Button type='submit' variant='shadow' radius='sm'>
				Continue
			</Button>
		</form>
	)
})
