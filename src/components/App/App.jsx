// import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css'
// import { useDispatch } from 'react-redux';
// import { loginUser } from '../../store/authSlice'

import Auth from '../Auth/Auth';

function App() {
  // const dispatch = useDispatch();

  const handleLogin = (login, password) => {
    console.log('test')
    // dispatch(loginUser({ login, password }))
    //   .then(() => {
    //     console.log('1')
    //   })
    //   .catch(() => {
    //     console.log('2')
    //   })
  }

  return (
    <>

      <Routes>
        <Route path='/sign-in' element={
          <Auth
            login={handleLogin}
          />} />
      </Routes>
    </>
  )
}

export default App;
