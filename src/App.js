import { useEffect, useState } from 'react'
import { getShuffleTheCards, getDrawACards } from './services'

function App() {
	const [deckId, setdeckId] = useState(null)
	
	const fetchData = async () => {
		const deckCount = 1
		const { data } = await getShuffleTheCards(deckCount)
		setdeckId(data)
	}
	console.log(deckId)
	useEffect(() => {
		fetchData()
	}, [])

	useEffect(() => {
		fetchDataCard()
	}, [deckId != null])

	const fetchDataCard = async () => {
		const deckCount = 3
		const { data } = await getDrawACards(deckId.deck_id, deckCount)
		setdeckId(data)
	}

	return (
		<div className='App'>
			<h1>hola</h1>
		</div>
	)
}

export default App
