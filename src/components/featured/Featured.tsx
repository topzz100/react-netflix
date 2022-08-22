import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import {  Movie } from '../../API';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { BACKDROP_SIZE, IMAGE_BASE_URL } from '../../config';
import { mostPopular, selectType } from '../../features/movie/movieSlice';
import './featured.scss'


const Featured = () => {
  const dispatch = useAppDispatch()
  const [movie, setMovie] = useState<Movie | null>(null)
  const type = useAppSelector(selectType)
  const {isError, isSuccess, message, popularMovie} = useAppSelector(state => state.movie)
  useEffect(() => {
    dispatch(mostPopular(type))
  },[type])

  useEffect(() => {
     if (isError) {
       toast.error(message)
     }
    if(isSuccess){
      setMovie(popularMovie)
    }
    
  }, [ popularMovie ]) 

  return (
    <div className='featured'>
      {
        type &&
        <div className="type">
          <span>{type}</span>
          <select name="genre" id="genre">
            <option>Genre</option>
            <option value="action">Action</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="xci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      }
    
      <img src={`${IMAGE_BASE_URL}${BACKDROP_SIZE}/${movie?.backdrop_path}`} alt="" />
    
      <div className="featured-about">
        <h3 className='title'>
          {
            movie?.original_title || movie?.original_name
          }
        </h3>
        <span className="desc">
          {
            movie && movie.overview
          }
        </span>
        <div className="buttons">
          <Link to={`/video/${movie?.id}`}>
            <button className='play'>
              <i className="fa-solid fa-play"></i>
              <span>
                Play
              </span>
            </button>
          </Link>
          <button className='info'>
            <i className="fa-solid fa-circle-info"></i>
            <span>
              Info
            </span>
          </button>
        </div>
    
      </div>
    </div>
  )
}

export default Featured