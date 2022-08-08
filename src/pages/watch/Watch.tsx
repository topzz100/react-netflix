import { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { getVideo, Video } from '../../API'
import { useAppSelector } from '../../app/hooks'
import { selectType } from '../../features/movie/movieSlice'
import './watch.scss'

const Watch = () => {
  const type = useAppSelector(selectType)
  const param = useParams()
  const location = useLocation().pathname.split('/')[2]
  const [video, setVideo] = useState<Video>()

  const fetchVideo = async() => {
    const data = await getVideo(type, location)
    setVideo(data)
  }

  const back = () => {
    window.history.back()
  }
  useEffect(() => {
    fetchVideo()
  }, [setVideo, type])
  console.log(video)
  return (
    <div className='watch'>
      <div className="top" onClick={back}>
        <i className="fa-solid fa-arrow-left"></i>
        <span>Home</span>
      </div>
     
       <iframe width="560" height="315" src={`https://www.youtube.com/embed/${video?.key}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    </div>
  )
}

export default Watch