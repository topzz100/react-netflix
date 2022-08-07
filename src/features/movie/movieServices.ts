import axios from "axios"
import { API_URL, KEY, POPULAR_MOVIES_URL, POPULAR_SERIES_URL, TOP_RATED_MOVIES, TOP_RATED_SERIES } from "../../config"

const fetchPopular = async(type : String) => {
   if (type === 'movies'){
    const res = await axios.get(`${POPULAR_MOVIES_URL}&page=1`)
    return res.data.results.slice(10)
  }
  if(type === 'series'){
    const res = await axios.get( `${POPULAR_SERIES_URL}&page=1`)
    return res.data.results.slice(10)
  }
    // const res = await axios.get(type ==='movies' ? `${POPULAR_MOVIES_URL}&page=1`: `${POPULAR_SERIES_URL}&page=1`)
    // return res.data.results.slice(10)
 
}

const fetchMostPopular = async(type : String) => {

  if (type === 'movies'){
    const res = await axios.get(`${POPULAR_MOVIES_URL}&page=1`)
    const id = res.data?.results[0].id
    const response = await axios.get(`${API_URL}movie/${id}?api_key=${KEY}&language=en-US`)
    return response.data
  }
  if(type === 'series'){
    const res = await axios.get( `${POPULAR_SERIES_URL}&page=1`)
    const id = res.data?.results[0].id
    const response = await axios.get(`${API_URL}tv/${id}?api_key=${KEY}&language=en-US`)
    return response.data
  }
  else{
    const res = await axios.get(`${POPULAR_MOVIES_URL}&page=1`)
    const id = res.data?.results[0].id
    const response = await axios.get(`${API_URL}movie/${id}?api_key=${KEY}&language=en-US`)
    return response.data
  }
    // const res = await axios.get(type ==='movies' ? `${POPULAR_MOVIES_URL}&page=1` : `${POPULAR_SERIES_URL}&page=1`)
    // const id = res.data?.results[0].id
    // const response = await axios.get(type ==='movies' ? `${API_URL}movie/${id}?api_key=${KEY}&language=en-US`: `${API_URL}tv/${id}?api_key=${KEY}&language=en-US`)
    
    // return response.data
 
}

const fetchTrending = async(type : String)=> {
    if (type === 'movies'){
    const res = await axios.get(`${TOP_RATED_MOVIES}&page=1`)
    return res.data.results.slice(10)
  }
  if(type === 'series'){
    const res = await axios.get( `${TOP_RATED_SERIES}&page=1`)
    return res.data.results.slice(10)
  }

 
}
const fetchMovie = async( type: String, movieId: number) => {
  if(type === 'movies'){
    const res = await axios.get( `${API_URL}movie/${movieId}?api_key=${KEY}&language=en-US`)
  return res.data
  }
  if(type === 'series'){
    const res = await axios.get(`${API_URL}tv/${movieId}?api_key=${KEY}&language=en-US`)
  return res.data  
  }
  // const res = await axios.get(type ==='movies' ? `${API_URL}movie/${movieId}?api_key=${KEY}&language=en-US`: `${API_URL}tv/${movieId}?api_key=${KEY}&language=en-US`)
  // return res.data
}

const movieServices = {
  fetchPopular,
  fetchTrending,
  fetchMovie,
  fetchMostPopular
}
export default movieServices