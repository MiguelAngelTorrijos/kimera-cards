import { useContext } from 'react'
import { getReshuffletheCards } from '../../services'
import { DeckContext } from '../../context/deckContext'
// import GetCard from '../GetCard/GetCard'

const ShuffleCards = () => {
	const { deckId } = useContext(DeckContext)

	const fetchDataShuffle = async () => {
		await getReshuffletheCards(deckId.deck_id)
	}

	const handleShuffle = () => {
		if (deckId !== null) {
			fetchDataShuffle()
		}
	}

	return (
		<>
			<button onClick={() => handleShuffle()}>barajar</button>
		</>
	)
}

export default ShuffleCards
