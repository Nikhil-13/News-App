import { useContext } from 'react'
import NewsContext from '../context/NewsContext'

function Navbar() {
	const { props, setProps } = useContext(NewsContext)
	return (
		<nav className='navbar'>
			<ul className='nav-list'>
				<li
					onClick={() => {
						setProps({
							country: props.country,
							category: 'business',
							page_size: props.page_size,
						})
					}}>
					Business
				</li>
				<li
					onClick={() => {
						setProps({
							country: props.country,
							category: 'entertainment',
							page_size: props.page_size,
						})
					}}>
					Entertainment
				</li>
				<li
					onClick={() => {
						setProps({
							country: props.country,
							category: 'technology',
							page_size: props.page_size,
						})
					}}>
					Technology
				</li>
				<li
					onClick={() => {
						setProps({
							country: props.country,
							category: 'health',
							page_size: props.page_size,
						})
					}}>
					Health
				</li>
				<li
					onClick={() => {
						setProps({
							country: props.country,
							category: 'sports',
							page_size: props.page_size,
						})
					}}>
					Sports
				</li>
			</ul>
		</nav>
	)
}

export default Navbar
