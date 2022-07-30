import React from 'react'
import { useParams } from 'react-router-dom'
import Featured from '../../components/featured/Featured'
import List from '../../components/list/List'
import Navbar from '../../components/navbar/Navbar'
import './home.scss'

const Home = () => {
  const pathname = window.location.pathname
  const type = pathname.split('/')[1]
  return (
    <div className='home'>
      <Navbar/>
      <Featured type={type}/> 
      <List/>
      <List/>
      <List/>
      
    </div>
  )
}

export default Home