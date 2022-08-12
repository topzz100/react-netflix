import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Movie } from '../../API'
import { useAppSelector } from '../../app/hooks'
import { API_URL, BACKDROP_SIZE, IMAGE_BASE_URL, KEY } from '../../config'
import {  selectType } from '../../features/movie/movieSlice'
import './listItem.scss'


type Props= {
  id : number;
}

const ListItem: React.FC<Props> = ({id }) => {
  const [details, setDetails] = useState<Movie | null>()
  const type = useAppSelector(selectType)

  const fetchMovie = async( type: String, movieId: number) => {
    if(type === 'movies'){
      try{
        const res = await axios.get( `${API_URL}movie/${movieId}?api_key=${KEY}&language=en-US`)
        setDetails(res.data)
      }catch(err){
      console.log(err)
      }
    }
    if(type === 'series'){
      try{
        const res = await axios.get(`${API_URL}tv/${movieId}?api_key=${KEY}&language=en-US`)
        setDetails(res.data)
      }catch(err){
        console.log(err)
      }
    }
    else{
      try{
        const res = await axios.get( `${API_URL}movie/${movieId}?api_key=${KEY}&language=en-US`)
        setDetails(res.data)
      }catch(err){
        console.log(err)
      }
    }
  }
  useEffect(()=> {
    fetchMovie(type, id)
  },[type, details, id])


  return (
    <div className='listItem' role='itemContainer'>
      <div className="item">
      
       <img src={`${IMAGE_BASE_URL}${BACKDROP_SIZE}/${details?.backdrop_path}` } role='imgContent' alt="" />
      
       
        <div className="more" role='moreInfo'>
          <div className="icons"> 
            <Link to={`/video/${details?.id}`}>
              <i className="fa-solid fa-play icon" ></i>
            </Link>
            
            <i className="fa-solid fa-plus icon"></i>
            <i className="fa-solid fa-thumbs-up icon"></i>
            <i className="fa-solid fa-thumbs-down icon"></i>
          </div>
          {
             
            <>
              <h5>{details?.original_title || details?.original_name}</h5>
              <div className="info">
                <span >{details?.runtime || details?.episode_run_time} minutes</span>
              </div>
            </>
           
          } 
          
          <p className="overview">{details && details.overview.substring(0, 120)}...</p> 
          <p className="genre">{
            details?.genres.slice(0, 2).map((gen) => (
              <span key={gen.id}>{gen.name}</span>
            ))
          }</p>
  
        </div>
        
      </div>

    </div>
  )
}

export default ListItem