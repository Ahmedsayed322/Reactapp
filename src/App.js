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
        <Header />
        <Home />
      </BrowserRouter>
    </>
  );
}

export default App;
