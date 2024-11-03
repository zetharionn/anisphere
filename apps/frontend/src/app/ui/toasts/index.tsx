import { Toaster } from 'react-hot-toast'

export const Toasts = () => {
	return (
		<Toaster
			position='bottom-right'
			toastOptions={{
				className: 'text-foreground bg-primary'
			}}
		/>
	)
}
