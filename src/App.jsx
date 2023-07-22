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
				<Navbar />
			</header>
			<main>
				<NewsList />
			</main>
			<button className='read-more' onClick={() => setPageSize(pageSize + 4)}>
				&#8595;
			</button>
		</div>
	)
}

export default App

