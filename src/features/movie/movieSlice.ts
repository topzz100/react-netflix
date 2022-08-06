import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import movieServices from './movieServices'
import {Movie, Movies} from '../../API'
import { RootState } from '../../app/store';

type MovieState ={
  type: string;
  popularMovie: Movie | null;
  movie: Movie | null;
  movies : Movie[];
  trending: Movie[];
  isError: boolean;
  isLoading: boolean;
  isSuccess: boolean;
  message: any
}
export type dataType= {
  
    type:string;
    movieId:number;

}

const initialState: MovieState = {
  type: 'movies',
  movie: null,
  popularMovie: null,
  movies: [],
  trending: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: ''

}

export const popularMovies = createAsyncThunk(
  'popular/all',
  async (type: string, thunkAPI) => {
    try {
      return await movieServices.fetchPopular(type)
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

export const trendingMovies = createAsyncThunk(
  'trending/all',
  async (type: string, thunkAPI) => {
    try {
      return await movieServices.fetchTrending(type)
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

export const mostPopular = createAsyncThunk(
  'mostPopular',
  async (type: string, thunkAPI) => {
    try {
      return await movieServices.fetchMostPopular(type)
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)
export const getMovie = createAsyncThunk(
  'movie',
  async (data: dataType, thunkAPI) => {
    const {type, movieId} = data
    try {
      return await movieServices.fetchMovie(type, movieId)
    } catch (error: any ) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

export const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    reset: (state) => 
      // state.isError = false,
      // state.isSuccess = false,
      // state.message = '',
      // state.movie = null
      initialState
    ,
    updateType: (state, action: PayloadAction<string> )=> {
      state.type = action.payload
    }  
  },
   extraReducers: (builder) => {
    builder
      .addCase(mostPopular.pending, (state) => {
        state.isLoading = true
      })
      .addCase(mostPopular.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.popularMovie = action.payload
      })
      .addCase(mostPopular.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.popularMovie = null
      })
        .addCase(trendingMovies.pending, (state) => {
        state.isLoading = true
      })
      .addCase(trendingMovies.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.trending = action.payload
      })
      .addCase(trendingMovies.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.trending = []
      })
      .addCase(popularMovies.pending, (state) => {
        state.isLoading = true
      })
      .addCase(popularMovies.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.movies = action.payload
      })
      .addCase(popularMovies.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.movies = []
      })
       .addCase(getMovie.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getMovie.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.movie = action.payload
      })
      .addCase(getMovie.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.movie = null
      })
     
  },
})

export const selectType = (state: RootState) => state.movie.type;
export const { reset, updateType } = movieSlice.actions;
export default movieSlice.reducer