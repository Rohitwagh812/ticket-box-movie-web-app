import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const MOVIE_API = 'https://api.themoviedb.org/3/movie/now_playing?api_key=7992856206e1a3b72da1d3f0ab8b5b93&language=en-US&page=2%27'

const IMAGES_API = 'https://image.tmdb.org/t/p/w500'
const TILIMIG = ["10:00 AM", "01:00 PM" , "05:00 PM" ,"09:00 PM" ,"12:00 AM"]

function Movie () {

  const [movie , setMovie] = useState([])
  const [latLng , setLatLng] = useState({})
  const [theatres , setTheatre] = useState([]) 
  const {id} = useParams()
  const navigate = useNavigate()

//  console.log(typeof id )
 useEffect(()=>{
  axios.get(MOVIE_API).then((resp)=>{
    const allMovies = resp.data.results
    const movieFilter = allMovies.filter((movie)=>movie.id == id)
    setMovie(movieFilter)
  })
},[]  )
const title = movie.map((movie)=>movie.title)

useEffect(()=>{
    if('geolocation' in navigator){
      navigator.geolocation.getCurrentPosition((position)=>{
        setLatLng({
          lat : position.coords.latitude,
          lng : position.coords.longitude
        })
      })
    }
},[])

useEffect(()=>{

  console.log(latLng)

  if(Object.keys(latLng).length > 0){
    const GEO_API =  `https://api.geoapify.com/v2/places?categories=entertainment.cinema&filter=circle:72.8233555,18.9720126,5000&bias=proximity:72.8233555,18.9720126&limit=20&apiKey=f2cce07aff054b26be31a6ff349bd2ed`


    // const GEO_API =   `https://api.geoapify.com/v2/places?categories=entertainment.cinema&filter=circle:${latLng.lng},${latLng.lat},49995&bias=proximity:79.0820556,21.1498134&limit=20&apiKey=f2cce07aff054b26be31a6ff349bd2ed`
    

    
    // const GEO_API =`https://api.geoapify.com/v2/places?categories=entertainment.cinema&filter=circle:${latLng.lng},${latLng.lat},5000&bias=proximity:78.46106473453146,17.38878595&limit=20&apiKey=f2cce07aff054b26be31a6ff349bd2ed`

    axios.get(GEO_API).then((res)=>{
       console.log(res.data.features)
       const featuresData = res.data.features
       const name = []
       featuresData.map((feature)=>{name.push(feature.properties.name)})
       setTheatre(name)
    })}

      
  
 
},[latLng])

// console.log(movie)


  return (
    <div>
        <Container>
        <Row>
            <Col>
              <div style={{padding:50}}>
                <img style={{borderRadius:10 , marginBottom:20}} src={IMAGES_API + movie[0]?.poster_path } height={350} width={350} alt="" />
                <h4>{title}</h4>
                <div>{movie[0]?.overview}</div>
              </div>
            </Col>
            <Col style={{padding:50}}>
              <div>
                {
                  theatres.map((theatre,index)=>{
                    return(
                      <div style={{marginBottom:20}}  key={index}>
                        <h5 style={{marginBottom:10 ,fontWeight:'bold'}}>{theatre}</h5>
                        {
                          TILIMIG.map((time )=>{
                            return(
                              <Button onClick={()=> {
                                navigate('/seatpage', {state : {title : title}})
                                }} style={{marginRight:10}}  key={time}>
                              {time}
                            </Button>
                            )
                          })
                        }
                      </div>
                    )
                  })
                }
              </div>
            </Col>
        </Row>
        </Container>
    </div>
  )
}

export default Movie

