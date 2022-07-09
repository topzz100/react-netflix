import './list.scss'
import ListItem from '../listItem/ListItem'
import { useRef, useState } from 'react'

const List = () => {
  const [count, setCount] = useState<number>(0)
  const wrapperRef = useRef<HTMLInputElement | null>(null)
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
      <h4>Continue to watch</h4>
      <div className="container">
        {count !== 0 && 
          <i className="fa-solid fa-chevron-left left" onClick={() => handleSlide('left')}></i>
        } 
        <div className="wrapper" ref={wrapperRef}>
          <ListItem/>
          <ListItem/>
          <ListItem/>
          <ListItem/>
          <ListItem/>
          <ListItem/>
          <ListItem/>
          <ListItem/>
          <ListItem/>
          <ListItem/>
        </div>
        {count !== 5 && 
          <i className="fa-solid fa-chevron-right right" onClick={() => handleSlide('right')}></i>
        }
      </div>
    </div>
  )
}

export default List