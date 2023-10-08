import { Routes, Route } from 'react-router-dom';
import './App.css'
import { useDispatch } from 'react-redux';
import { loginUser } from '../../store/authSlice'


import Auth from '../Auth/Auth';
import './App.css';
import Navbar from '../Navbar/Navbar';
import PopupWithTk from '../PopupTK/PopupWithTk';

import FirstScreen from '../1stscrenn/1stscreen';
import { useNavigate } from "react-router-dom";
import SecondScreen from '../2ndscreen/2ndscreen';


function App() {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const handleLogin = (email, password) => {
    console.log('1')
   

    dispatch(loginUser({ email, password }))
      .unwrap()
      .then(() => {
        navigate("/profile");
        window.location.reload();
      })
      .catch(() => {
        console.log('2')
      })
  }

  return (
    <>
    {/* <MainTable></MainTable> */}
      <Navbar />
      <Routes>
        <Route path='/' element={<PopupWithTk></PopupWithTk>} />
        <Route path="/1screen" element={<FirstScreen />} />
        <Route path="/2screen" element={<SecondScreen />} />
        <Route path='/sign-in' element={
          <Auth
            login={handleLogin}
          />} />
      </Routes>
    </>
  )
}

export default App;
