import { useContext } from 'react'
import NewsContext from '../context/NewsContext'

function Navbar() {
	const { setProps, defPageSize } = useContext(NewsContext)
	return (
		<div className='navbar'>
			<ul className='nav-list'>
				<li
					className='nav-list-item'
					onClick={() =>
						setProps({ country: 'in', category: 'business', page_size: defPageSize })
					}>
					Business
				</li>
				<li
					className='nav-list-item'
					onClick={() =>
						setProps({ country: 'in', category: 'technology', page_size: defPageSize })
					}>
					Technology
				</li>
				<li
					className='nav-list-item'
					onClick={() =>
						setProps({ country: 'in', category: 'sports', page_size: defPageSize })
					}>
					Sports
				</li>
			</ul>
			<div className='ham-menu'>
				<span className='line line1'></span>
				<span className='line line2'></span>
				<span className='line line3'></span>
			</div>
		</div>
	)
}

export default Navbar
