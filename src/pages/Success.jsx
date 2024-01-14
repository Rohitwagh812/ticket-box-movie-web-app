import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useLocation } from 'react-router-dom'
import QRCode from 'react-qr-code';
import SuccessImg from '../assets/Corn.png'



function Success() {
    
    const location = useLocation()
    const {seats , title} = location.state
    let arr = [" Your Seat Numbers : "+ seats + ','+' Your Movie Name : '+ title + ' ' + ', SMS : '+'Hey Your Ticket is Booked' ]
    const qrCodeData = JSON.stringify(arr)
    console.log(arr);
  return (
    <div>
        <Container>
            <Row style={{ marginLeft:50}}>
                <Col>
                   <img src={SuccessImg} height={400} width={400} style={{marginTop:40}} alt="" />

                   <div style={{marginTop:10}} >
                       <h5>Your Ticket is Booked</h5>
                       <h6>Enjoy your Movie Showing with us !</h6>
                   </div>
                </Col>
                <Col>
                    <div style={{ padding: 30, marginLeft:50 , marginTop:100}}>
                         <QRCode value={qrCodeData} />
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Success