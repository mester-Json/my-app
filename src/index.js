import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { StrictMode } from 'react';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Index from './pages/Accueille'
import Console from './pages/Console';
import Profile from './pages/Profile'
import Panier from './pages/Panier'
import Retro from './pages/Retro';
import Jeux from './pages/Jeux'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path='/Console' element={<Console />} />
        <Route path='/Jeux' element={<Jeux />} />
        <Route path='/Profile' element={<Profile />} />
        <Route path='/Panier' element={<Panier />} />
        <Route path='/Retro' element={<Retro />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);