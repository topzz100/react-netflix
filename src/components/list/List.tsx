import './list.scss'
import ListItem from '../listItem/ListItem'
import { useRef } from 'react'

const List = () => {
  const wrapperRef = useRef<HTMLInputElement | null>(null)
  const handleSlide = (dir: string) => {
    if (null !== wrapperRef.current){

      const distance = wrapperRef.current.getBoundingClientRect().x
      if(dir === 'left'){
        wrapperRef.current.style.transform = `translateX(${distance-225- 50 -10}px)`
        console.log(wrapperRef.current.getBoundingClientRect())
      }
      if(dir === 'right'){
        wrapperRef.current.style.transform = `translateX(${distance +225-50+10}px)`
        console.log(distance)
      }
    }
    
  }
  return (
    <div className='list'>
      <h4>Continue to watch</h4>
      <div className="container">
        <i className="fa-solid fa-chevron-left left" onClick={() => handleSlide('left')}></i>
        <div className="wrapper" ref={wrapperRef}>
          <div className="listItem">
            <ListItem/>
          </div>
          <div className="listItem">
            <ListItem/>
          </div>
          <div className="listItem">
            <ListItem/>
          </div>
          <div className="listItem">
            <ListItem/>
          </div>
          <div className="listItem">
            <ListItem/>
          </div>
          <div className="listItem">
            <ListItem/>
          </div>
          <div className="listItem">
            <ListItem/>
          </div>
          <div className="listItem">
            <ListItem/>
          </div>
          <div className="listItem">
            <ListItem/>
          </div>
        </div>
        <i className="fa-solid fa-chevron-right right" onClick={() => handleSlide('right')}></i>
      </div>
    </div>
  )
}

export default List