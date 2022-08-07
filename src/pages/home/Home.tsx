import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
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
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(updateType(type))
   
  },[ type ])

  return (
    <div className='home'>
      <Navbar/>
      <Featured /> 
      <List  title='Popular on Netflix' category ='popular'/>
      {/* <List title='Trending' category ='trending' />  */}
      {/* <List title='Popular on Netflix' category ='popular'/>  */}
      {/* <List/> */}
      
    </div>
  )
}

export default Home