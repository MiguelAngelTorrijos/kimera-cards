import { useContext } from 'react'
import { resetDeck } from '../../services'
import { DeckContext } from '../../context/deckContext'

const RestardDeck = () => {
	const { deckId } = useContext(DeckContext)

	const fetchDataShuffle = async () => {
		await resetDeck(deckId.deck_id)
		localStorage.clear()
	}

	const handleRestardDeck = () => {
		if (deckId !== null) {
			fetchDataShuffle()
		}
	}

	return (
		<>
			<button onClick={() => handleRestardDeck()}>Reiniciar Baraja</button>
		</>
	)
}

export default RestardDeck
