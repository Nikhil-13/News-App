/* eslint-disable react/jsx-key */
import { useContext } from 'react'
import { v4 as uuidv4 } from 'uuid'
import NewsItem from './NewsItem'
import NewsContext from '../context/NewsContext'

function NewsList() {
	const { news } = useContext(NewsContext)
	// console.log(newsData)
	return (
		<>
			{news
				? news.map((item) => <NewsItem key={(item.id = uuidv4())} item={item} />)
				: ''}
		</>
	)
}

export default NewsList
