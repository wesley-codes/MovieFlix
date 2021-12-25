import {createSlice} from "@reduxjs/toolkit"

const initialState ={
    detailsArr : {},
    MoviesApi :[]
}


const favorites = createSlice({
    name: "Favorites",
    initialState,
    reducers:{
        ReplaceMovies(state, {payload}){
        // console.log(...payload[0].title);
         state.MoviesApi.push(...payload)
              
        },


        DisplayToDetails(state, {payload}){
           state.detailsArr.id = payload.id
           state.detailsArr.img = payload.movieImg
           state.detailsArr.title = payload.title
           state.detailsArr.description = payload.description
           state.detailsArr.duration = payload.duration
           state.detailsArr.rating = payload.rating
           state.detailsArr.releaseDate = payload.releaseDate
           state.detailsArr.genre = payload.genre
        }
    }
})



export const favoritesActions = favorites.actions
export default favorites.reducer