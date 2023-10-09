import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.css'
import Auth from '../Auth/Auth';
import './App.css';
import PageNotFound from '../PageNotFound/PageNotFound';
import FirstScreen from '../1stscreen/1stscreen';
import SecondScreen from '../2ndscreen/2ndscreen';


// import PopupWithTk from '../PopupTK/PopupWithTk';
// import ProtectedRoute from '../../utils/ProtectedRoute';
// import { logoutUser } from '../../store/authSlice';
// import { useDispatch, useSelector } from 'react-redux';
// import { useCallback, useEffect } from 'react';


function App() {

  // const dispatch = useDispatch();
  // const navigate = useNavigate();

  // useEffect(() => {
  //   window.addEventListener('beforeunload', logout())
  // })

  // const logout = () => {
    // dispatch(logoutUser())
      // .then(() => {
      //   navigate('/');
      // })
      // .catch((err) => {
      //   console.log(err)
      // })
  // }

  // const { isLoggedIn } = useSelector((state) => state.auth);

  return (
    <>
      <Routes>
        <Route path='/sign-in' element={
          <Auth />} />
        
        <Route path="/" element={<FirstScreen />} />
        
        <Route path="/2screen" element={<SecondScreen />} />
     
        <Route path='*' element={<PageNotFound />} />


      </Routes>
    </>
  )
}

export default App;
