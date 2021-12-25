
import {favoritesActions} from "./Favorites-Slice"


export const fetchMovies = ()=>{
    return async (dispatch) =>{
        const fetchData =async ()=>{
            const apiKey ="db8c29de96767df9c748f50d557a61df"
            const response = await fetch(`
            https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`)
            const data = await response.json()
            return data

        }
        const movieData = await fetchData()
            dispatch(favoritesActions.ReplaceMovies(movieData.results))
      
    }
}