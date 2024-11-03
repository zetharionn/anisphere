import { Button, Divider, Input } from '@nextui-org/react'
import { type FC, memo } from 'react'
import { type AuthType, useAuthForm } from '../lib'
import { useAuthFormStore } from '../model'

export interface IEmail {
	type: AuthType
}

export const Email: FC<IEmail> = memo(({ type }) => {
	const {
		onSubmit,
		formState: { errors },
		register
	} = useAuthForm(type)
	const changeFormMode = useAuthFormStore(state => state.changeFormMode)

	return (
		<div className='flex flex-col gap-4'>
			<form className='flex flex-col gap-2' onSubmit={onSubmit}>
				<Input
					{...register('email')}
					isRequired
					type='text'
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
			<Divider />
			<div className='flex flex-col'>
				<Button
					variant='bordered'
					radius='sm'
					onClick={() => changeFormMode('options')}
				>
					Return to options
				</Button>
			</div>
		</div>
	)
})
