import { useContext } from 'react'
import { DeckContext } from '../../context/deckContext'
import { shuffleUserPile } from '../../services'

const ShuffleUserCards = () => {
	const { deckId } = useContext(DeckContext)

	const fetchDataShuffle = async () => {
		const userPile = JSON.parse(localStorage.getItem('pileName'))
		await shuffleUserPile(deckId.deck_id, userPile)
	}

	const handleShuffle = () => {
		if (deckId !== null) {
			fetchDataShuffle()
		}
	}

	return (
		<>
			<button onClick={() => handleShuffle()}>barajar mi pila</button>
		</>
	)
}

export default ShuffleUserCards
