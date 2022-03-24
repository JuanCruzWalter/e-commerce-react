import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ContainerComponents/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import ItemList from './components/ItemList/ItemList';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <main className="App-header">
          
          <ItemList />
          <ItemCount />
          
        
      </main>
      
    </div>
  );
}

export default App;
