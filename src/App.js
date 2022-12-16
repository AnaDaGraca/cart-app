import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 	Home from './Pages/Home';
import Carrinho from './Components/CarrinhoDeCompras'
import { CartProvider } from 'react-use-cart';

function App() {
	return (
		<div>
			<CartProvider>
				<Home/>
				<Carrinho />
			</CartProvider>
		</div>
	);
}

export default App;