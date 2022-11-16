import {useContext} from 'react'
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import {UserContext} from './context/UserContext';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';
import Content from './components/layouts/Content';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
function App() {

  const {user} = useContext(UserContext); 
 
  
  return (

        <BrowserRouter>
        <Header/>
          <Routes>
          <Route path="/home" element={<Content/>} />

            { user && <Route path="/" element={<Home/>} /> }
            {!user && (
              <>
              <Route path="/login" element={<Login/>} />
              <Route path="/signup" element={<Register/>} />
              </>
            )}
            <Route path="*" element={<Navigate to={user ? '/':'/login'} />} />
          </Routes>
          <Footer/>
        </BrowserRouter>

  );
}

export default App;