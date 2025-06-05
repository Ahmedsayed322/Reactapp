import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Component/Header';
import HeroImage from './Component/HeroImage';
import Skills from './Component/Skills';
import Home from './Component/Home';

function App() {
  return (
    <>
      <BrowserRouter>
        <div className='container'>
          <Header />
        </div>
        <Home />
      </BrowserRouter>
    </>
  );
}

export default App;
