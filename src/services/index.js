import axios from 'axios'

const url = process.env.REACT_APP_DOC_API_URL

const getShuffleTheCards = (deckCount = 1) => {
	return axios.get(url + '/new/shuffle/?deck_count=' + deckCount)
}

const getDrawACards = (deckId, cards) => {
	return axios.get(url + '/' + deckId + '/draw/?count=' + cards)
}

export { getShuffleTheCards, getDrawACards }
