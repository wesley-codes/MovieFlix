import {configureStore} from '@reduxjs/toolkit'
import favoritesReducer  from "./Favorites-Slice"
const store = configureStore({
    reducer:{detail :favoritesReducer}
})

export default store