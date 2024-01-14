import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
const MOVIE_API = 'https://api.themoviedb.org/3/movie/now_playing?api_key=7992856206e1a3b72da1d3f0ab8b5b93&language=en-US&page=2%27'

const IMAGES_API = 'https://image.tmdb.org/t/p/w500'

function Home () {

  const [movies , setMovies] = useState([])
  const navigate = useNavigate()

  // useEffect(()=>{
  //   const uesr = localStorage.getItem('userEmail')
  //   if(!uesr){
  //     navigate('/login')
  //   }
  // },[])
 
  useEffect(()=>{
        axios.get(MOVIE_API).then((resp)=>{
        console.log(resp.data.results)
        setMovies(resp.data.results)
        })
  },[]  )

  const handleClick = (movieId) =>{
    navigate('/movie/' +  movieId )
    const uesr = localStorage.getItem('userEmail')
    if(!uesr){
      alert('DEAR USER PLEASE LOGIN FIRST')
      navigate('/login')
    }
  }

  return (
    <div style={{ marginLeft:20, display:'flex', flexWrap:'wrap'}}>
        {movies.map((movie) =>{
             return(
              <div key={movie.id} style={{display:'flex' , flexWrap:'wrap'}}>
                <Card style={{height:'auto', padding:25 , margin:10, width:"18rem", overflow:'hidden',  cursor:'pointer'}} onClick={()=>handleClick(movie.id)} key={movie.id} >
                    <Card.Img variant="top" width={120} src={IMAGES_API + movie.poster_path} />
                        <Card.Title>{movie.title}</Card.Title>
                 </Card>
              </div>
             )
        })}
    </div>
  )
}

export default Home