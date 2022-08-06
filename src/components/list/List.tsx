import './list.scss'
import ListItem from '../listItem/ListItem'
import { useEffect, useRef, useState } from 'react'
import { fetchPopular, fetchTrending, Movie, Movies} from '../../API'
import axios from 'axios'
import { API_URL, KEY } from '../../config'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { popularMovies, reset, selectType, trendingMovies } from '../../features/movie/movieSlice'
import { toast } from 'react-toastify'

type Props={
  title: string,
  category: String
}
type Video = {
key : number
}
const List: React.FC<Props> = ({title, category}) => {
  const [count, setCount] = useState<number>(0)
  const wrapperRef = useRef<HTMLInputElement | null>(null)
  const [movies, setMovies] = useState< Movie[] | null >(null)
  const [video, setVideo] = useState< Movie[] | null >(null)
  const type = useAppSelector(selectType)
  const dispatch = useAppDispatch()
  const {isError, isSuccess, isLoading, message,trending, movies: moviesPopular} = useAppSelector(state => state.movie)

  useEffect(() => {
    // if(category === 'popular'){
    //   dispatch(popularMovies(type))
    // }
    // if(category === 'trending'){
    //   dispatch(trendingMovies(type))
    // }
    dispatch(trendingMovies(type))
    dispatch(popularMovies(type))
  },[type, category])

   useEffect(() => {
     if (isError) {
       toast.error(message)
     }
    if(isSuccess){
      if(category==='popular'){
      setMovies(moviesPopular)
      }
      if(category==='trending'){
        setMovies(trending)
      }
    }
      //  return () => {
      //     dispatch(reset())
      //  }
  }, [moviesPopular, category]) 
  // const getMovies = async() => {
  //   try{
  //     if(category === 'popular'){
  //       const data = await fetchPopular(type, 1)
  //       setMovies(data.results)
  //      }
  //    if(category === 'trending'){
  //       const data = await fetchTrending(type, 1)
  //       setMovies(data.results)
  //    }
     
  //   }catch(err){
  //     console.log(err)
  //   }
  // }

  //  const getMovie= async(id: number)  =>{
  //   try{
      
  //      const res = await axios.get(type ==='movies' ? `${API_URL}movie/${id}?api_key=${KEY}&language=en-US`: `${API_URL}tv/${id}?api_key=${KEY}&language=en-US`)
  //       return res.data
  //   }catch(err){
  //     console.log(err)
  //   }
  // }


  // const getVideo = async(id: number): Promise<Video> => {
  //   const vid = await axios.get(type === 'movies' ?`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${KEY}&language=en-US`: `https://api.themoviedb.org/3/tv/${id}/videos?api_key=${KEY}&language=en-US`)
       
  //     return vid.data.results[0]
  // }
  // console.log(movies && movies)
  // useEffect(() => {
  //     getMovies()
  // },[type])

  const handleSlide = (dir: string) => {
    if (null !== wrapperRef.current){

      const distance = wrapperRef.current.getBoundingClientRect().x-50
      if(dir === 'right'){
        wrapperRef.current.style.transform = `translateX(${distance-230-10}px)`
        setCount(count>5? 5 : count+1)
        // console.log(wrapperRef.current.getBoundingClientRect())
      }
      if(dir === 'left'){  
        wrapperRef.current.style.transform = `translateX(${230+10+distance}px)`
        setCount(count < 1? 0 : count-1)
        // console.log(distance)
      }
    }
    
  }
  return (
    <div className='list'>
      <h4>{title}</h4>
      <div className="container">
        {count !== 0 && 
          <i className="fa-solid fa-chevron-left left" onClick={() => handleSlide('left')}></i>
        } 
        <div className="wrapper" ref={wrapperRef}>

          { 
            movies && movies.slice(0,10).map((movie) => (
              <ListItem key={movie.id} id={movie.id} 
              // getMovie={getMovie(movie.id)} 
              // getVideo = {getVideo(movie.id)} 
              // type = {type}
              />
            ))
          }
          {/* // <ListItem/>
          // <ListItem/>
          // <ListItem/>
          // <ListItem/>
          // <ListItem/>
          // <ListItem/>
          // <ListItem/>
          // <ListItem/>
          // <ListItem/>
          // <ListItem/> */}
        </div>
        {count !== 5 && 
          <i className="fa-solid fa-chevron-right right" onClick={() => handleSlide('right')}></i>
        }
      </div>
    </div>
  )
}

export default List