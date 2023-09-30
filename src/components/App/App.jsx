// import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css'
// import { useState } from 'react'

import Auth from '../Auth/Auth';

function App() {

  return (
    <>

      <Routes>
        <Route path='/sign-in' element={<Auth/>}/>
      </Routes>
    </>
  )
}

export default App;
