import { useContext, useEffect, useState } from 'react'
import { DeckContext } from '../../context/deckContext'
import { addingToPiles, getDrawACards } from '../../services'
import { Button } from '../ui/Button'

const GetCard = () => {
	const { deckId, setUserFlow, userFlow, setRemainingSt, remainingSt } =
		useContext(DeckContext)
	const [codeCards, setCodeCards] = useState([])

	const fetchDataCard = async () => {
		const card = process.env.REACT_APP_QUANTITY_OF_CARDS || 1
		const { data } = await getDrawACards(deckId.deck_id, card)
		const userPile = JSON.parse(localStorage.getItem('userPile')) || []

		localStorage.setItem('remaining', data.remaining)
		setRemainingSt(data.remaining)
		userPile.push(data.cards[0])
		localStorage.setItem('userPile', JSON.stringify(userPile))
		setUserFlow([...userFlow, data.cards[0]])
		const updatedUserDeckPile = JSON.parse(localStorage.getItem('userPile'))
		const extractedCodes = updatedUserDeckPile.map(obj => obj.code)
		setCodeCards(extractedCodes)
	}

	useEffect(() => {
		const pileName = process.env.REACT_APP_PILE_NAME || 'player1'
		localStorage.setItem('pileName', JSON.stringify(pileName))

		if (codeCards.length !== 0) {
			addingToPiles(deckId.deck_id, pileName, codeCards.toString())
		}
	}, [codeCards])

	const handleGetCard = () => {
		if (deckId !== null) {
			fetchDataCard()
		}
	}

	remainingSt === 0 && window.alert('No hay cartas, reinicia la baraja')

	return (
		<>
			<Button
				centered
				disabled={remainingSt === 0}
				onClick={() => {
					handleGetCard()
				}}
				text={'	Dame una carta'}
			/>
		</>
	)
}

export default GetCard
