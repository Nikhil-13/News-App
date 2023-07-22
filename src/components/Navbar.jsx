import { useContext } from 'react'
import NewsContext from '../context/NewsContext'

function Navbar() {
	const { props, setProps } = useContext(NewsContext)
	return (
		<nav className='navbar'>
			<div className='sub-nav'>
				<div className='logo'>
					<h2>NewsApp</h2>
				</div>
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
								category: 'sports',
								page_size: props.page_size,
							})
						}}>
						Sports
					</li>
				</ul>
			</div>
			<div className='ham-menu' style={{ border: '1px solid white' }}>
				<span className='line line1'></span>
				<span className='line line2'></span>
				<span className='line line3'></span>
			</div>
		</nav>
	)
}

export default Navbar
