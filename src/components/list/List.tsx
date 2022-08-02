import './list.scss'
import ListItem from '../listItem/ListItem'
import { useEffect, useRef, useState } from 'react'
import { fetchPopular, fetchTrending, Movie, Movies} from '../../API'
import axios from 'axios'

type Props={
  title: String,
  type: String,
  category: String
}
const List: React.FC<Props> = ({title, type, category}) => {
  const [count, setCount] = useState<number>(0)
  const wrapperRef = useRef<HTMLInputElement | null>(null)
  const [movies, setMovies] = useState< Movie[] | null >(null)

  const getMovies = async() => {
    try{
      if(category === 'popular'){
        const data = await fetchPopular(type, 1)
        setMovies(data.results)
       }
     if(category === 'trending'){
        const data = await fetchTrending(type, 1)
        setMovies(data.results)
     }
     
    }catch(err){
      console.log(err)
    }
  }
  // console.log(movies && movies)
  useEffect(() => {
      getMovies()
  },[type])

  const handleSlide = (dir: string) => {
    if (null !== wrapperRef.current){

      const distance = wrapperRef.current.getBoundingClientRect().x-50
      if(dir === 'right'){
        wrapperRef.current.style.transform = `translateX(${distance-230-10}px)`
        setCount(count>5? 5 : count+1)
        console.log(wrapperRef.current.getBoundingClientRect())
      }
      if(dir === 'left'){
        wrapperRef.current.style.transform = `translateX(${230+10+distance}px)`
        setCount(count < 1? 0 : count-1)
        console.log(distance)
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
              <ListItem key={movie.id} movie={movie}/>
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