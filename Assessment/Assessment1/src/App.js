
import './App.css';
import Home from './components/Home';
import Add from './components/Add';
import NaviBar from './components/NaviBar';
import { Route, Routes } from 'react-router-dom';
import React from 'react'


function App() {
  return (
    <div className="App">
      
    
      <NaviBar/>  
      <Routes>
        <Route path="/"element={<Add/>}/>
        <Route path="/home" element = {<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
