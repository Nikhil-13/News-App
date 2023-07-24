import { useContext, useState } from 'react'
import { FaTimes, FaBars } from 'react-icons/fa'
import './App.css'
import './CustomStyles.css'
import Navbar from './components/Navbar'
import NewsList from './components/NewsList'
import NewsContext from './context/NewsContext'

function App() {
	const { pageSize, setPageSize } = useContext(NewsContext)
	const [toggleMenu, setToggleMenu] = useState('closed')

	return (
		<div className='container'>
			<header>
				<div className='logo'>
					<h2>NewsApp</h2>
				</div>
				<Navbar />
				{toggleMenu === 'closed' ? (
					<FaBars
						className='menu'
						size={30}
						onClick={() => {
							setToggleMenu('open')
							document.querySelector('.navbar').classList.add('active')
						}}
					/>
				) : (
					<FaTimes
						className='menu'
						size={30}
						onClick={() => {
							setToggleMenu('closed')
							document.querySelector('.navbar').classList.remove('active')
						}}
					/>
				)}
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

