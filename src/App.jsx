import { useContext } from 'react'
import './App.css'
import './CustomStyles.css'
import Navbar from './components/Navbar'
import NewsList from './components/NewsList'
import NewsContext from './context/NewsContext'

function App() {
	const { pageSize, setPageSize } = useContext(NewsContext)
	return (
		<div className='container'>
			<header>
				<h2 className='logo'>News App</h2>
				<Navbar />
			</header>
			<main>
				<NewsList />
			</main>
			<button
				className='find-more'
				onClick={() => setPageSize(pageSize + 4)}
				style={{
					borderRadius: '50%',
					height: '50px',
					width: '50px',
					display: 'block',
					color: 'var(--background)',
					background: 'var(--accent)',
					marginInline: 'auto',
				}}>
				I
			</button>
		</div>
	)
}

export default App

