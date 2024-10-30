import { useAuthStore } from '@entities/user'
import { Profile } from '@features/Profile'
import {
	Button,
	Image,
	Link,
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem
} from '@nextui-org/react'
import { ROUTES } from '@shared/lib'
import { Outlet } from 'react-router-dom'

const Layout = () => {
	const isAuth = useAuthStore(state => state.isAuth)

	return (
		<>
			<Navbar>
				<NavbarBrand>
					<Link href={ROUTES.HOME}>
						<Image src='/logo.svg' width={50} height={50} alt='AniSphere' />
					</Link>
				</NavbarBrand>
				<NavbarContent justify='end'>
					{isAuth ? (
						<NavbarItem>
							<Profile />
						</NavbarItem>
					) : (
						<>
							<NavbarItem>
								<Button as={Link} href={ROUTES.SIGN_UP} variant='bordered'>
									Sign up
								</Button>
							</NavbarItem>
							<NavbarItem>
								<Button as={Link} href={ROUTES.SIGN_IN} variant='light'>
									Sign in
								</Button>
							</NavbarItem>
						</>
					)}
				</NavbarContent>
			</Navbar>
			<Outlet />
		</>
	)
}

export default Layout
