import GetCard from './components/GetCard'
import RestardDeck from './components/RestardDeck'
import ShuffleCards from './components/ShuffleCards'
import ShuffleUserCards from './components/ShuffleUserCards'

function App() {
	return (
		<div className='App'>
			<h1>Juego de cartas</h1>
			<ShuffleCards />
			<GetCard />
			<RestardDeck />
			<ShuffleUserCards />
		</div>
	)
}

export default App
