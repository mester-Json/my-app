import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './pages/Accueille'
import Console from './pages/Console';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path='/Console' element={<Console />} />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));