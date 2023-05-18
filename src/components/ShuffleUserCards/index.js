import { useContext } from 'react'
import { DeckContext } from '../../context/deckContext'
import { shuffleUserPile } from '../../services'
import { Button, ButtonStyles } from '../ui/Button'

const ShuffleUserCards = () => {
	const { deckId, remainingSt, userFlow } = useContext(DeckContext)

	const fetchDataShuffle = async () => {
		const userPile = JSON.parse(localStorage.getItem('pileName'))
		await shuffleUserPile(deckId.deck_id, userPile)
		window.alert('Barajando mi pila')
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
				disabled={remainingSt === 0 || userFlow.length === 0}
				onClick={() => handleShuffle()}
				text={'Barajar mi pila'}
				styles={ButtonStyles.ALT_2}
			/>
		</>
	)
}

export default ShuffleUserCards
