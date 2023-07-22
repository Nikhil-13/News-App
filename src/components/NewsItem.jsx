function NewsItem({ item }) {
	return (
		<div className='news-item'>
			<img
				className='image'
				alt='text'
				src={
					item.urlToImage
						? item.urlToImage
						: 'https://t4.ftcdn.net/jpg/02/51/95/53/240_F_251955356_FAQH0U1y1TZw3ZcdPGybwUkH90a3VAhb.jpg'
				}
			/>
			<div className='content'>
				<a href='#'>
					<span className='title'>
						{item.title ? item.title.slice(0, 50) : 'no title'}
					</span>
				</a>
				<p className='desc'>
					{item.content ? item.content.slice(0, 100) : 'no content available'}
				</p>
				<a href={item.url}>
					<button className='find-more'>
						to read more
						<span aria-hidden='true'>→</span>
					</button>
				</a>
			</div>
		</div>
	)
}

export default NewsItem
