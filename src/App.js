import React, { Fragment } from "react";
import "./App.css";
import Header from "./Components/Header";
import Hompage from "./Pages/Hompage";
import {Routes, Route} from "react-router-dom"
import DetailsPage from "./Pages/DetailPage"
import {useEffect} from "react"
import {useDispatch} from "react-redux"
import {fetchMovies} from "./Store/Actions"
function App() {
  const dispatch = useDispatch()

useEffect(() => {
  dispatch(fetchMovies())

}, [dispatch])

  return (
    <Fragment>
      <Header />
     <Routes>
       <Route path="/"  element={<Hompage/>}/>
       <Route path="/Moviedetail/:MovieId"  element={<DetailsPage/>}/>
     </Routes>
     
    </Fragment>
  );
}

export default App;
