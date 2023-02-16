import Layout from './components/layout/Layout'
import Home from './components/screens/Home/Home'
import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Layout>
			<Home />
		</Layout>
	</React.StrictMode>
)
