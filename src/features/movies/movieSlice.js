import { createSlice } from "@reduxjs/toolkit";


const movieSlice = createSlice({
    name: 'counter',
    initialState: {value: 0},
    reducers: {
      addMovies:(state, {payload}) => {
          state.movies = payload;
          
      }
    },
})

export const {addMovies} = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies
export default movieSlice.reducer;