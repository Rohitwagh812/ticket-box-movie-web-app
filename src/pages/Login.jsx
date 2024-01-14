import React, { useState } from 'react'
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap'
 
import Movieimg from '../assets/Movie.png'
import { useNavigate } from 'react-router-dom'

function Login({setUser}) {
  const navigate = useNavigate()
  const [email , setEmail] = useState('')
    const [password , setPassword] = useState('')
  const handSumbit =() =>{
    localStorage.setItem('userEmail' , email)
    localStorage.setItem('userPassword' , password)
    setUser(email)
    navigate('/')
    window.location.reload()
}
  return (
    <div className='auth-container'>
      <Container>
        <Row>
            <Col style={{display:'flex', justifyContent:'center' , alignItems:'center'}} className='img-container'>
                <img src={Movieimg} height={550} width={550} alt="" />
            </Col>
            <Col style={{display:'flex', justifyContent:'center' , alignItems:'center'}}>
                <Card className='card-one' style={{width:'25rem',padding:25}}>
                    <Card.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control className='user-input' type="email" placeholder="Enter Your Email"
                            onChange={(e)=>setEmail(e.target.value)}
                            value={email}  />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control className='user-input' type="password" placeholder="Enter Your Password" onChange={(e) => setPassword(e.target.value)}
                                value={password}/>
                        </Form.Group>
                        <Button onClick={() => handSumbit()} variant="primary" type="submit" className='login-button'>
                            Login
                        </Button>
                        </Form>
                        <div style={{marginTop:25, display:'flex',justifyContent:'center', cursor:'pointer'}}>
                          New Here? Please<Card.Link style={{marginLeft:5}} href='/signUp'>Sign up</Card.Link>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
      </Container> 
    </div>
  )
}

export default Login