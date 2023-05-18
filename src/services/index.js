import axios from 'axios'

const url = process.env.REACT_APP_DOC_API_URL

const getDeckOfCards = (deckCount = 1) =>
	axios.get(url + '/new/shuffle/?deck_count=' + deckCount)

const getReshuffletheCards = deckID =>
	axios.get(url + `/${deckID}/shuffle/?remaining=true`)

const getDrawACards = (deckId, cards) =>
	axios.get(url + '/' + deckId + '/draw/?count=' + cards)

const addingToPiles = (deckID, pileName, cards) =>
	axios.get(url + `/${deckID}/pile/${pileName}/add/?cards=${cards}`)

	const shuffleUserPile = (deckID, pileName) =>
		axios.get(url + `/${deckID}/pile/${pileName}/shuffle/`)

const resetDeck = deckID => axios.get(url + `/${deckID}/return/`)

export {
	getDeckOfCards,
	getReshuffletheCards,
	getDrawACards,
	resetDeck,
	addingToPiles,
	shuffleUserPile,
}
