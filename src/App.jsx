import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
	return (
		<>
			<NavBar />
			<ItemListContainer greeting='Mis Productos' />
		</>
	);
}

export default App;
