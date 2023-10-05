import React from 'react';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import './App.css'
import Home from './components/HomePage/Home';


function App() {
  return (
    <div className='container'>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
