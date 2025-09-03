// import '../styles.css';
import Cart from './components/Cart';
import Login from './components/Login';
import Products from './components/Products';

export default function App() {
  return (
    <div className="App">
      <h1>Buy all things</h1>
    <hr/>
    <Login />
    <hr/>
    <Products />
    <hr/>
    <Cart />
   </div>

  );
}
