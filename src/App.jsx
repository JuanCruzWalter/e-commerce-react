import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

import ItemCount from './components/ItemCount/ItemCount';
import ItemList from './components/ItemList/ItemList';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import CartContextProvider, { CartContext } from "../src/components/Context/CartContext"


function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <CartContextProvider>
              <NavBar/>
                    <main className="App-header">
                        <Routes>
                            <Route 
                              path="/" 
                              element={<ItemList />}
                            />  
                            <Route
                              path="/count" 
                              element={ <ItemCount />
                              }
                            />
                            <Route 
                              path="/:detalleid" 
                              element={<ItemDetailContainer />
                              }
                            />
                            <Route 
                            path='/cart' 
                            element={ <Cart/>
                              }
                            />   
                        </Routes>
                    </main>
          </CartContextProvider>
              
           
      </div>
    </BrowserRouter>
  );
}

export default App;
