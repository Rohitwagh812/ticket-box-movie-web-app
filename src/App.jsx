// import { Route, Router } from 'react-router-dom';
import { Button, Container, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logoimg from '../src/assets/Logo.png';
import './App.css';
import React, { useEffect, useState } from 'react'
import { Route, Routes} from 'react-router-dom';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import Movie from './pages/Movie';
import SelectSeat from './pages/SelectSeat';
import Success from './pages/Success';



function App() {
  const [user , setUser] = useState()
 

  useEffect(() =>{
    const userEmail = localStorage.getItem('userEmail')
     if(userEmail){
      setUser(userEmail)
     }
  },[user])

  const handleLogout = () =>{
    localStorage.removeItem('userEmail')
    window.location.href = '/login'
    // navigate('/login')
    setUser(null)
  }

  return (
    <div>
       {/* <Navbar bg='light' variant='light'>
        <Container>
          <Navbar.Brand style={{fontWeight:"bold"}} href="/">
            <img
              alt=""
              src={Logoimg}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            TICKET BOX
          </Navbar.Brand>
          {user && <Button className='logout-btn' onClick={()=> {handleLogout()}}> Logout </Button>}
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/movie/:id" element={<Movie/>}/>
        <Route path="/seatpage" element={<SelectSeat/>}/>
        <Route path="/success" element={<Success/>}/>
        <Route path="/login" element={<Login setUser={setUser}/>}/>
        <Route path="/signup" element={<SignUp setUser={setUser}/>}/>
      </Routes> */} hello
      </div>
  )
}

export default App


