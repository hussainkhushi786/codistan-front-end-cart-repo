import Home from './pages/Home';
import './assets/scss/screen.css';
import CartProvider from './contextApi/CartContext';
function App() {

  return (
    <CartProvider>
     <Home/>
    </CartProvider>
  )
}

export default App
