import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'
import { BrowserRouter } from 'react-router-dom'
import { Routing, Toasts } from './ui'
import './ui'

const App = () => {
	return (
		<BrowserRouter>
			<SpeedInsights />
			<Routing />
			<Toasts />
			<Analytics />
		</BrowserRouter>
	)
}

export default App
