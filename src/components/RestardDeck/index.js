import { useContext } from 'react'
import { getDeckOfCards, resetDeck } from '../../services'
import { DeckContext } from '../../context/deckContext'
import { Button, ButtonStyles } from '../ui/Button'

const RestardDeck = () => {
	const { deckId, setdeckId, setUserFlow, setRemainingSt } =
		useContext(DeckContext)

	const fetchDataShuffle = async () => {
		await resetDeck(deckId.deck_id)
		localStorage.clear()
		setUserFlow([])
		setRemainingSt(deckId.remaining)
		fetchData()
	}

	const fetchData = async () => {
		const deckCount = 1
		const { data } = await getDeckOfCards(deckCount)
		setdeckId(data)
		localStorage.setItem('remaining', data.remaining)
		setRemainingSt(data.remaining)
	}

	const handleRestardDeck = () => {
		if (deckId !== null) {
			fetchDataShuffle()
		}
	}

	return (
		<>
			<Button
				centered
				onClick={() => handleRestardDeck()}
				text={'Reiniciar Baraja'}
				styles={ButtonStyles.ALT_1}
			/>
		</>
	)
}

export default RestardDeck
