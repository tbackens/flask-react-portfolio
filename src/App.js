import './App.css';
import AppRouter from './components/AppRouter';
import NavBar from './components/NavBar';

import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <AppRouter/> 
      </BrowserRouter>
    </div>
  );
}

export default App;
