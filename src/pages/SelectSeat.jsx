import React, { useEffect, useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom'

function SelectSeat() {
    const location = useLocation();
    const { title } = location.state;
    const [seatdata , setSeatData] = useState([])
    const [seats , setSeats] = useState([])
    const navigate = useNavigate()

    const createSeat = () => {
        let totalRows = 5;
        let numofSeatInaRow =8;
        let tempSeat= [];
        // let row = 0 ;
        let ch = 'A';
        for (let row = 1; row <= totalRows; row++) {
            let rowArr = [];
            for (let col = 1; col <= numofSeatInaRow; col++) {
              rowArr.push(ch + col);
            }
            tempSeat.push(rowArr);
            ch = String.fromCharCode(ch.charCodeAt(0) + 1);
          }
        setSeatData(tempSeat)
        console.log(tempSeat)
    }


    
    useEffect(() =>{
        createSeat()
    
    } ,[])

    const handleSelect = (newSeat)=>{
        setSeats([...seats , newSeat])
    }

  
    console.log(seats)
  return (
    <div style={{padding:30, marginLeft:20 }}>
        <div>
            <h3 className='d-inline-block'>{title}</h3>
            <div style={{marginLeft: 300, fontWeight:'bold'}} className='d-inline-block'>Screen This Side</div>
        </div>
        
        {
            seatdata.map((seatArr)=>{
                return(
                   <Row style={{marginBottom:30,marginTop:34}} key={seatArr}>
                    {
                    seatArr.map((seat)=>{
                        let isSelected = seats.indexOf(seat) !== -1;
                        return(
                            <Col key={seat}>
                               <Button style={{backgroundColor:isSelected ? 'green' : 'gray', border:"none"}} onClick={() => handleSelect(seat)} variant="secondary">{seat}</Button>
                            </Col>
                        )
                    })
                   }
                   </Row>
                )
            })
        }
        <div style={{marginTop:30}}>
               {
                seats.length > 0 ? 
                <div>
                    {
                       seats.map((sect)=>{
                        return(
                            <div sty key={sect} className='d-inline-block'
                             style={{marginRight:10}}>
                                {sect},</div>
                        )
                       })
                    }
                    Seats Selected 
                    <div  style={{marginTop:10 , display:'flex',alignItems:'center'}}>
                        <h4 className='d-inline-block'>
                          Total : RS. {seats.length * 250}
                        </h4>
                        <Button onClick={()=>{navigate('/success',{state:{seats:seats,title:title}})
                         alert('Hey Your Ticket is Booked')
                    }} style={{marginLeft:20}} className='d-inline-block'>Check Out</Button>
                    </div>
                    
                </div> : 
                <div>No Seat Selected</div>

               }
        </div>
        
    </div>
  )
}

export default SelectSeat