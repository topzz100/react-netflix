import { useEffect } from 'react'
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
    dispatch(updateType(type))
   
  },[ type ])

  return (
    <div className='home'>
      <Navbar/>
      <Featured /> 
      <List  title='Popular on Netflix' category ='popular'/>
      <List title='Trending' category ='trending' /> 
      
    </div>
  )
}

export default Home