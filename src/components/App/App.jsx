import { Routes, Route } from 'react-router-dom';
import './App.css'
// import { useDispatch } from 'react-redux';
// import { loginUser } from '../../store/authSlice'


import Auth from '../Auth/Auth';
import './App.css';
import Navbar from '../Navbar/Navbar';
import PopupWithTk from '../PopupTK/PopupWithTk';
import FirstScreen from '../1stscreen/1stscreen';
import SecondScreen from '../2ndscreen/2ndscreen';

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
