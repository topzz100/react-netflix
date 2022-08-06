import axios from 'axios';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { fetchPopular, Movie } from '../../API';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { API_URL, BACKDROP_SIZE, IMAGE_BASE_URL, KEY } from '../../config';
import { mostPopular, popularMovies, reset, selectType } from '../../features/movie/movieSlice';
import './featured.scss'

type Props = {
  type: string;
}
type Video = {
  key: String
}
const Featured = () => {
  const dispatch = useAppDispatch()
  const [movie, setMovie] = useState<Movie | null>(null)
  const type = useAppSelector(selectType)
  const {isError, isSuccess, isLoading, message, popularMovie} = useAppSelector(state => state.movie)
  useEffect(() => {
    dispatch(mostPopular(type))
  },[type])

  useEffect(() => {
     if (isError) {
       toast.error(message)
     }
    if(isSuccess){
      setMovie(popularMovie)
      //  console.log(movie)
    }
    
  }, [ popularMovie ]) 
// https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US

  // const getMovie= async() =>{
  //   try{
  //     const data =await fetchPopular(type, 1)
  //      const id = data.results[0].id
  //      const res = await axios.get(type ==='movies' ? `${API_URL}movie/${id}?api_key=${KEY}&language=en-US`: `${API_URL}tv/${id}?api_key=${KEY}&language=en-US`)
  //      res.data && setMovie(res.data)
  //   }catch(err){
  //     console.log(err)
  //   }
  // }

  // //console.log(movie)

  // useEffect(() => {
  //   getMovie()
  // }, [type])
  // console.log(movie && movie.id)
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
      {/* <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="" /> */}
      {
        
      <img src={`${IMAGE_BASE_URL}${BACKDROP_SIZE}/${movie?.backdrop_path}`} alt="" />
      }
      <div className="featured-about">
        {/* <img src="https://upload.wikimedia.org/wikipedia/fr/d/d1/Logo_Matrix_Resurrections.png" alt="" /> */}
        <h3 className='title'>
          {
            type==='movies'? movie?.original_title: movie?.original_name
          }
        </h3>
        <span className="desc">
          {
            movie && movie.overview
          }
        </span>
        <div className="buttons">
          <button className='play'>
            <i className="fa-solid fa-play"></i>
            <span>
              Play
            </span>
          </button>
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