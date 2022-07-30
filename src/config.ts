const KEY: string | undefined = process.env.REACT_APP_KEY 
const API_URL: string = 'https://api.themoviedb.org/3/';
const POPULAR_MOVIES_URL= `${API_URL}movie/popular?api_key=${KEY}&language=en-US`
const LATEST_MOVIES_URL = `${API_URL}movie/latest?api_key=${KEY}&language=en-US`
const TOP_RATED_MOVIES = `${API_URL}movie/top_rated?api_key=${KEY}&language=en-US`
const POPULAR_SERIES_URL= `${API_URL}tv/popular?api_key=${KEY}&language=en-US`
const LATEST_SERIES_URL = `${API_URL}tv/latest?api_key=${KEY}&language=en-US`
const TOP_RATED_SERIES = `${API_URL}tv/top_rated?api_key=${KEY}&language=en-US`
const IMAGE_BASE_URL: string = 'http://image.tmdb.org/t/p/'
const BACKDROP_SIZE: string = 'w1280';


export {
  POPULAR_MOVIES_URL,
  API_URL,
  KEY,
  LATEST_MOVIES_URL,
  TOP_RATED_MOVIES,
  POPULAR_SERIES_URL,
  LATEST_SERIES_URL,
  TOP_RATED_SERIES,
  IMAGE_BASE_URL,
  BACKDROP_SIZE
}