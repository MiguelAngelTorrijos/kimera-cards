import { useContext } from 'react'
import './styles.scss'

import { DeckContext } from '../../../context/deckContext'

const Flow = () => {
	const { userFlow } = useContext(DeckContext)
	return (
		<>
			{userFlow && (
				<div className='flow-container'>
					{userFlow?.map(card => (
						<div className='card' key={card.code}>
							<img src={card.image} />
						</div>
					))}
				</div>
			)}
		</>
	)
}

export default Flow
