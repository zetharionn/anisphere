import { useAuthStore } from '@entities/user'
import { Button, Divider, Image } from '@nextui-org/react'
import { discordMark, gitHubMark } from '@shared/ui'
import { type FC, memo } from 'react'
import { useAuthFormStore } from '../model'

export const Options: FC = memo(() => {
	const signInWithOAuth = useAuthStore(state => state.signInWithOAuth)
	const changeFormMode = useAuthFormStore(state => state.changeFormMode)

	return (
		<div className='flex flex-col gap-4'>
			<Button
				variant='shadow'
				radius='sm'
				onClick={() => changeFormMode('email')}
			>
				Continue with Email
			</Button>
			<Divider />
			<div className='flex flex-col gap-2'>
				<Button
					variant='bordered'
					radius='sm'
					onClick={() => signInWithOAuth('github')}
					startContent={<Image src={gitHubMark} width={25} />}
				>
					Continue with GitHub
				</Button>
				<Button
					variant='bordered'
					radius='sm'
					onClick={() => signInWithOAuth('discord')}
					startContent={<Image src={discordMark} width={25} />}
				>
					Continue with Discord
				</Button>
			</div>
		</div>
	)
})
