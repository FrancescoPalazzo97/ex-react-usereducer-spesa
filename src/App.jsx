import { GlobalProvider } from "./contexts/GlobalContext";

import ProductsList from "./components/ProductsList";
import Cart from "./components/Cart";

function App() {

  return (
    <GlobalProvider>
      <h1>Lista della spesa</h1>
      <div className="container">
        <ProductsList />
        <Cart />
      </div>
    </GlobalProvider>
  )
}

export default App
