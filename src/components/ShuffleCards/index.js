import { useContext } from 'react'
import { getReshuffletheCards } from '../../services'
import { DeckContext } from '../../context/deckContext'
import { Button, ButtonStyles } from '../ui/Button'

const ShuffleCards = () => {
	const { deckId, remainingSt } = useContext(DeckContext)

	const fetchDataShuffle = async () => {
		await getReshuffletheCards(deckId.deck_id)
		window.alert('Barajando el resto')
	}

	const handleShuffle = () => {
		if (deckId !== null) {
			fetchDataShuffle()
		}
	}

	return (
		<>
			<Button
				centered
				disabled={remainingSt === 0}
				onClick={() => handleShuffle()}
				text={'Barajar'}
				styles={ButtonStyles.ALT_2}
			/>
		</>
	)
}

export default ShuffleCards
