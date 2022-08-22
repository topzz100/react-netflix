import './list.scss'
import ListItem from '../listItem/ListItem'
import { useEffect, useRef, useState } from 'react'
import { Movie, } from '../../API'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { popularMovies, selectType, trendingMovies } from '../../features/movie/movieSlice'
import { toast } from 'react-toastify'

type Props={
  title: string,
  category: String,
}

const List: React.FC<Props> = ({title, category}) => {
  const [count, setCount] = useState<number>(0)
  const wrapperRef = useRef<HTMLInputElement | null>(null)
  const [movies, setMovies] = useState< Movie[] | null >(null)
  const type = useAppSelector(selectType)
  const dispatch = useAppDispatch()
  const {isError, isSuccess, message,trending, movies: moviesPopular} = useAppSelector(state => state.movie)

  useEffect(() => {
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
   
  }, [type, moviesPopular, category]) 


  const handleSlide = (dir: string) => {
    if (null !== wrapperRef.current){

      const distance = wrapperRef.current.getBoundingClientRect().x-50
      if(dir === 'right'){
        wrapperRef.current.style.transform = `translateX(${distance-230-10}px)`
        setCount(count>5? 5 : count+1)
      }
      if(dir === 'left'){  
        wrapperRef.current.style.transform = `translateX(${230+10+distance}px)`
        setCount(count < 1? 0 : count-1)
      }
    }
    
  }
  return (
    <div className='list'>
      <h4 role="headingTitle">{title}</h4>
      <div className="container">
        {count !== 0 && 
          <i className="fa-solid fa-chevron-left left" onClick={() => handleSlide('left')} role= 'directionLeft'></i>
        } 
        <div className="wrapper" ref={wrapperRef}>

          { 
            movies && movies.slice(0,10).map((movie) => (
              <ListItem key={movie.id} id={movie.id}/>
            ))
          }
     
        </div>
        {count !== 5 && 
          <i className="fa-solid fa-chevron-right right" onClick={() => handleSlide('right')} role= 'directionRight'></i>
        }
      </div>
    </div>
  )
}

export default List