import { useContext } from 'react'
import './styles.scss'

import { ReactComponent as DeckImg } from '../../assets/Deck.svg'
import { DeckContext } from '../../context/deckContext'

const Deck = () => {
	const { remainingSt } = useContext(DeckContext)
	return (
		<div className='deck-container'>
			<p>Resto: {remainingSt || 0}</p>
			<DeckImg />
		</div>
	)
}

export default Deck
