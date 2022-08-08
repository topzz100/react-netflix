import axios from 'axios';
import {
  API_URL, KEY, LATEST_MOVIES_URL, LATEST_SERIES_URL, POPULAR_MOVIES_URL, POPULAR_SERIES_URL, TOP_RATED_MOVIES, TOP_RATED_SERIES, 
} from './config';

export type Movie = {
  backdrop_path: string;
  id: number;
  original_title: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  title: string;
  vote_average: number;
  vote_count: number;
  budget: number;
  runtime: number;
  revenue: number;
  release_date: string;
  first_air_date: string;
  episode_run_time: number;
  genres: {name: string, id: number}[]
};
export type Movies = {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
};

export type Video ={
  site: string;
  type: string;
  key: string;
  id: string;
}

export const fetchPopular = async(type : String, page : number): Promise<Movies>=> {

    const res = await axios.get(type ==='movies' ? `${POPULAR_MOVIES_URL}&page=${page}`: `${POPULAR_SERIES_URL}&page=${page}`)
    return res.data
 
}
export const fetchTrending = async(type : String, page : number): Promise<Movies>=> {

    const res = await axios.get(type ==='movies' ? `${TOP_RATED_MOVIES}&page=${page}`: `${TOP_RATED_SERIES}&page=${page}`)
    return res.data
 
}
export const fetchMovie = async(movieId: number) => {

  return await axios.get(`https://api.themoviedb.org/3/tv/${movieId}?api_key=${KEY}>>&language=en-US`)
}

export const getVideo = async(type: string, id: string): Promise<Video> => {
  const res = await axios.get(type === 'movies' ?`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${KEY}&language=en-US`: `https://api.themoviedb.org/3/tv/${id}/videos?api_key=${KEY}&language=en-US`)
       
  
  return res.data.results[3] || res.data.results[0]
}

 