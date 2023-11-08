import './App.css';
import axios from "axios";
import api from './api/axiosConfig';
import { useState,useEffect } from 'react';
import {MongoClient} from 'mongodb';




function App() {

  

  const API_URL = 'mongodb+srv://sheronjude8:Jsnaac963jsa&@newcluster.vxbco0m.mongodb.net/';
  const DB_NAME = 'movie-api-db';
  const COLLECTION_NAME = 'movies';
  
 const getAllMovies = async () => {
    try {
      const response = await axios.get(`${API_URL}/databases/${DB_NAME}/collections/${COLLECTION_NAME}`);
      console.log(response.data)
      return response.data;
    } catch (error) {
      console.error('Error fetching movies:', error);
      throw error;
    }
  };
getAllMovies()
  // const [movies,setMovies] = useState();

  // const getMovies = async() => {
  //   try{
  //     const response = await api.get("mongodb+srv://sheronjude8:Jsnaac963jsa&@newcluster.vxbco0m.mongodb.net/");
  //     console.log(response.data);
  //     setMovies(response.data);
  //   }
  //   catch(err){
  //     console.log(err);
  //   }
  // }

  // useEffect(() => {
  //   getMovies();
  // },[])    

  // const [users, setUsers] = useState([]);

  // useEffect(() => {
  //   axios.get('https://official-joke-api.appspot.com/random_joke')
  //     .then((response) => {
  //       console.log(response.data);
  //       setUsers(response.data);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }, []);




  // const user = async () => {
  //   const response = await fetch("mongodb://localhost:27017")
  //   const usersData = await response.data;
  //   console.log(usersData);
  // }
  // user();



  return (
    <div className="App">

    </div>
  );

     

}

export default App;
