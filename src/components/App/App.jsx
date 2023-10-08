import { Routes, Route } from 'react-router-dom';
import './App.css'
import Auth from '../Auth/Auth';
import './App.css';

// import PopupWithTk from '../PopupTK/PopupWithTk';

import FirstScreen from '../1stscreen/1stscreen';
import SecondScreen from '../2ndscreen/2ndscreen';


function App() {

  return (
    <>
      <Routes>
        <Route path='/sign-in' element={
          <Auth />} />

        {/* <Route path='/' element={<PopupWithTk></PopupWithTk>} /> */}
        <Route path="/" element={<FirstScreen />} />
        <Route path="/2screen" element={<SecondScreen />} />

      </Routes>
    </>
  )
}

export default App;
