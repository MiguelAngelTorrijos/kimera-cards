import Deck from './components/Deck'
import GetCard from './components/GetCard'
import RestardDeck from './components/RestardDeck'
import ShuffleCards from './components/ShuffleCards'
import ShuffleUserCards from './components/ShuffleUserCards'
import Flow from './components/ui/Flow'
import LayoutComponent from './components/ui/LayoutComponent'

function App() {
	return (
		<div className='App'>
			<LayoutComponent>
				<Flow />
				<div className='buttons-container'>
					<Deck />
					<ShuffleCards />
					<GetCard />
					<ShuffleUserCards />
					<RestardDeck />
				</div>
			</LayoutComponent>
		</div>
	)
}

export default App
