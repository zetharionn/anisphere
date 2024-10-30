import { useAuthStore } from '@entities/user'
import { Button, Link } from '@nextui-org/react'
import { ROUTES } from '@shared/lib'

const Home = () => {
	const isAuth = useAuthStore(state => state.isAuth)

	return (
		<div className='flex flex-col text-center items-center justify-center gap-4 h-[85vh]'>
			<div className='absolute z-[-1] w-[256px] h-[256px] rounded-full bg-gradient-to-b from-[#ffa500] to-[#8400ff] blur-[72px]' />
			<h1 className='sm:text-3xl md:text-5xl lg:text-6xl font-extrabold'>
				<span className='text-transparent bg-clip-text bg-gradient-to-br from-[#ffa500] to-[#8400ff]'>
					AniSphere
				</span>
			</h1>
			<p className='md:text-xl lg:text-2xl'>
				Blazing space to dive into your favorite anime with ease
			</p>
			<div className='flex flex-row gap-4'>
				<Button
					className='font-bold text-white'
					color='primary'
					variant='shadow'
					size='lg'
					as={Link}
					href={isAuth ? ROUTES.CATALOG : ROUTES.SIGN_UP}
				>
					Get Started
				</Button>
				<Button
					variant='bordered'
					size='lg'
					as={Link}
					href='https://github.com/zetharionn/AniTrack'
					target='_blank'
				>
					GitHub
				</Button>
			</div>
		</div>
	)
}

export default Home
