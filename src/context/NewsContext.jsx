import axios from 'axios'
import { createContext, useEffect, useState } from 'react'
const NewsContext = createContext()

export const NewsContextProvider = ({ children }) => {
	const api_key = 'd61e9b49b4264acda7e6f157a6a00a4c'
	const [news, setNews] = useState('')
	const [pageSize, setPageSize] = useState(0)
	const [props, setProps] = useState({
		country: 'in',
		category: 'general',
		page_size: 8,
	})

	useEffect(() => {
		fetchData()
	}, [props, pageSize])

	const fetchData = async () => {
		const response = await axios.get(
			`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${
				props.category
			}&apiKey=${api_key}&page=1&pageSize=${props.page_size + pageSize}`
		)
		setNews(response.data.articles)
	}
	return (
		<NewsContext.Provider
			value={{ news, fetchData, props, setProps, pageSize, setPageSize }}>
			{children}
		</NewsContext.Provider>
	)
}

export default NewsContext
