const KEY: string | undefined = process.env.REACT_ENV_KEY 
const API_URL: string = 'https://api.themoviedb.org/3';
const POPULAR_MOVIE_URL= `${API_URL}/movie/popular?api_key=${KEY}&language=en-US`
const LATEST_MOVIE_URL = `${API_URL}/movie/latest?api_key=${KEY}&language=en-US`
const TOP_RATED_MOVIE = `${API_URL}/movie/top_rated?api_key=${KEY}&language=en-US`
const POPULAR_SERIES_URL= `${API_URL}/tv/popular?api_key=${KEY}&language=en-US`
const LATEST_SERIES_URL = `${API_URL}/tv/latest?api_key=${KEY}&language=en-US`
const TOP_RATED_SERIES = `${API_URL}/tv/top_rated?api_key=${KEY}&language=en-US`


export {
  POPULAR_MOVIE_URL,
  API_URL,
  KEY,
  LATEST_MOVIE_URL,
  TOP_RATED_MOVIE,
  POPULAR_SERIES_URL,
  LATEST_SERIES_URL,
  TOP_RATED_SERIES
}