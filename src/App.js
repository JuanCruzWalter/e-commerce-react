import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/NavBar';

import ItemCount from './components/ItemCount/ItemCount';
import ItemList from './components/ItemList/ItemList';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <main className="App-header">
          
          <ItemList />
          <ItemCount />
          <ItemDetailContainer />
          
          
          
        
      </main>
      
    </div>
  );
}

export default App;
