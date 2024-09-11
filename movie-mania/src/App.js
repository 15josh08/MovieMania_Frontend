import logo from './logo.svg';
import './App.css';
import api from './api/axiosConfig'
import { useState,useEffect } from 'react';

function App() {
  const[movies,setMovies] = useState();

  const getmovies = async () =>{
    const response = await api.get("/api/v1/movies")
  }

  return (
    <div className="App">
     
    </div>
  );
}

export default App;
