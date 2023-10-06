import { Routes, Route } from 'react-router-dom';
import './App.css'
// import { useDispatch } from 'react-redux';
// import { loginUser } from '../../store/authSlice'
import LineChart from '../LineChart/LineChart';
import TableChart from '../TableChart/TableChart';

import Auth from '../Auth/Auth';
import './App.css';
import Navbar from '../Navbar/Navbar';
import PopupWithTk from '../PopupTK/PopupWithTk';

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
      <LineChart></LineChart>
      <TableChart></TableChart>
  <Navbar />
      <PopupWithTk></PopupWithTk>
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
