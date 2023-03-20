import './App.css';
import AppRouter from './components/AppRouter';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <AppRouter/> 
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
