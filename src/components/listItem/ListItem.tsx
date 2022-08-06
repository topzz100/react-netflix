import axios from 'axios'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { Movie } from '../../API'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { API_URL, BACKDROP_SIZE, IMAGE_BASE_URL, KEY } from '../../config'
import { dataType, getMovie, selectType } from '../../features/movie/movieSlice'
import './listItem.scss'

type Video = {
  key : number
}

type Props= {
  id : number;
//  getVideo: Promise<Video>;
 
  
}

const ListItem: React.FC<Props> = ({id}) => {
  // const [video, setVideo] = useState<Video>()
  const [details, setDetails] = useState<Movie | null>()
  const [count , setCount] = useState(0)
  const dispatch = useAppDispatch()
  const type = useAppSelector(selectType)
  const { isError, isSuccess, message, movie } = useAppSelector(state => state.movie)
  // const movieData = {type, id}
 
  //  useEffect(() => {
  //    // const movieData: {type: string, id: number} = {type, id}
  //   //  const {type, id} = movieData
  //    dispatch(getMovie({type, movieId: id}))
  //  }, [dispatch, type])

  //  useEffect(() => {
  //     if (isError) {
  //       toast.error(message)
  //     }
  //    if(isSuccess){
  //      setDetails(movie)
  //    }
  //      // return () => {
  //      //    dispatch(reset())
  //      // }
  //  }, [ movie]) 
  // console.log(id)
//   const fetchMovie = async( type: String, movieId: number) => {
const fetchMovie = async( type: String, movieId: number) => {

  if(type === 'movies'){
    try{
      const res = await axios.get( `${API_URL}movie/${movieId}?api_key=${KEY}&language=en-US`)
      setDetails(res.data)
    }catch(err){
      console.log(err)
    }
  }
  if(type === 'series'){
    try{
      const res = await axios.get(`${API_URL}tv/${movieId}?api_key=${KEY}&language=en-US`)
      setDetails(res.data)
    }catch(err){
      console.log(err)
    }
  }
}
useEffect(()=> {
  fetchMovie(type, id)
},[type])
//   const res = await axios.get(type ==='movies' ? `${API_URL}movie/${movieId}?api_key=${KEY}&language=en-US`: `${API_URL}tv/${movieId}?api_key=${KEY}&language=en-US`)
//   return res.data
// }

  // const getData = async() => {
  //   try{
  //     const data = await getVideo
  //     // data && setVideo(data)
  //   }
  //   catch(err){
  //     console.log(err)
  //   }
    
  //   // data && setVideo(data)
  // }
  // const getDetails = async() => {
  //   try{
  //     const data = await getMovie
  //     data && setDetails(data)
  //   }catch(err){
  //     console.log(err)
  //   }
  // }

  // const handleHover = () => [
  //   setCount(1)
  // ]
  // useEffect(() => {
  //   handleHover
  // },[])
  // useEffect(()=> {
  //   // getData()
  //   getDetails()
  // }, [type])

  

  return (
    <div className='listItem'>
      <div className="item">
        {/* <img src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F13%2F2015%2F04%2F05%2Ffeatured.jpg&q=60" alt="" /> */}
        
        
      
       <img src={`${IMAGE_BASE_URL}${BACKDROP_SIZE}/${details?.backdrop_path}`} alt="" />
      
        {/* <video src="/assets/dance.mp4" autoPlay muted loop></video> */}
        {/* <video src="https://www.youtube.com/embed/T8KpoU4mUPU" autoPlay muted loop></video> */}
        {/* {
          video &&
        <iframe width="100%" height="100%" src={`https://www.youtube.com/embed/${video.key}`} title="YouTube video player" frameBorder="0"
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"  
         allowFullScreen></iframe>
        // <video src="/assets/dance.mp4" autoPlay muted loop></video>
        // <video src={`https://www.youtube.com/embed/${video.key}`} autoPlay muted loop></video> 
        
        } */}
        <div className="more">
          <div className="icons">
            <i className="fa-solid fa-play icon" ></i>
            <i className="fa-solid fa-plus icon"></i>
            <i className="fa-solid fa-thumbs-up icon"></i>
            <i className="fa-solid fa-thumbs-down icon"></i>
          </div>
          {
              type === 'movies'?
              ( 
             
              <>
            <h5>{details?.original_title}</h5>
          <div className="info">
                  <span >{details?.runtime} minutes</span>
                  {/* <span>{details?.release_date.substring(0, 4)}</span> */}
                </div>
                </>
              ):
              (
              
                <>
                  <h5>{details?.original_name}</h5>
                <div className="info">
                  <span>{details?.episode_run_time} minutes</span>
                  {/* <span >{details?.first_air_date.slice(0,4)}</span> */}
                </div>
                </>
              )
            
        } 
          {/* </div> */}
          
          <p>{details && details.overview.substring(0, 100)}...</p> 
           <p>{movie && movie.overview.substring(0, 100)}...</p>
          <p className="genre">{
            details?.genres.splice(2).map((gen) => (
              <span key={gen.id}>{gen.name}</span>
            ))
          }</p>
        </div>
        
      </div>

    </div>
  )
}

export default ListItem