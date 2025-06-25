import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import NoteState from './context/notes/noteState';
import Alert from './components/Alert';

function App() {

  return (
    <div>
      <NoteState>
        <BrowserRouter>
          <Navbar />
          {/* <Alert /> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </BrowserRouter>
      </NoteState>
    </div>
  );
}

export default App;
