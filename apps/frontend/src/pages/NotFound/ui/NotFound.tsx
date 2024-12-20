import { Link } from '@nextui-org/react'
import { ROUTES } from '@shared/lib'

const NotFound = () => {
	return (
		<div className='flex flex-col text-center items-center justify-center gap-4 h-[85vh]'>
			<h1 className='sm:text-3xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-[#ffa500] to-[#8400ff]'>
				Not Found
			</h1>
			<div>
				<span>Return to </span>
				<Link href={ROUTES.HOME}>
					<span className='text-primary'>home page</span>
				</Link>
			</div>
		</div>
	)
}

export default NotFound
