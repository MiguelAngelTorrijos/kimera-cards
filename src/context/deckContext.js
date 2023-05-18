import { createContext, useEffect, useState } from 'react'
import { getDeckOfCards } from '../services'
import PropTypes from 'prop-types'

export const DeckContext = createContext()

export const DeckProvider = ({ children }) => {
	const [deckId, setdeckId] = useState(null)

	const fetchData = async () => {
		const deckCount = 1
		const { data } = await getDeckOfCards(deckCount)
		setdeckId(data)
		localStorage.setItem('remaining', data.remaining)
	}

	useEffect(() => {
		fetchData()
	}, [])

	return (
		<DeckContext.Provider
			value={{
				deckId,
				setdeckId,
			}}
		>
			{children}
		</DeckContext.Provider>
	)
}

DeckProvider.propTypes = {
	children: PropTypes.node.isRequired,
}
