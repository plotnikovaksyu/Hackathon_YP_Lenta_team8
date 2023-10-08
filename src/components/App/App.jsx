import { Routes, Route } from 'react-router-dom';
import './App.css'
import Auth from '../Auth/Auth';
import './App.css';
import PageNotFound from '../PageNotFound/PageNotFound';
// import PopupWithTk from '../PopupTK/PopupWithTk';
// import ProtectedRoute from '../../utils/ProtectedRoute';
import FirstScreen from '../1stscreen/1stscreen';
import SecondScreen from '../2ndscreen/2ndscreen';

import { loginUser } from '../../store/authSlice';
import { useSelector } from 'react-redux';

function App() {

  const { isLoggedIn } = useSelector((state) => state.user);

  return (
    <>
      <Routes>
        <Route path='/sign-in' element={
          <Auth />} />

        {/* <Route path='/' element={<PopupWithTk></PopupWithTk>} /> */}
        <Route path="/" element={<FirstScreen/>}/>
          {/* <ProtectedRoute element={<FirstScreen isLoggedIn={isLoggedIn} />} />
        } /> */}
        <Route path="/2screen" element={<SecondScreen />} />
          {/* <ProtectedRoute element={<SecondScreen isLoggedIn={isLoggedIn} />} />
        } /> */}
        <Route path='*' element={<PageNotFound />} />

       
      </Routes>
    </>
  )
}

export default App;
