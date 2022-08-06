import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useAppDispatch } from '../../app/hooks'
import Featured from '../../components/featured/Featured'
import List from '../../components/list/List'
import Navbar from '../../components/navbar/Navbar'
import { updateType } from '../../features/movie/movieSlice'
import './home.scss'

const Home = () => {
  const pathname = window.location.pathname
  const type = pathname.split('/')[1]
  const dispatch= useAppDispatch()

  useEffect(() => {
    // type? dispatch(updateType(type)): dispatch(updateType('movie'))
    dispatch(updateType(type))
  },[ type])
  console.log(pathname)
  return (
    <div className='home'>
      <Navbar/>
      <Featured /> 
      <List title='Popular on Netflix' category ='popular'/>
      <List title='Trending' category ='trending' /> 
      {/* <List title='Popular on Netflix' category ='popular'/>  */}
      {/* <List/> */}
      
    </div>
  )
}

export default Home