import React, {useEffect} from 'react';
import MovieListing from '../MovieListing/MovieListing';
import movieApi from '../../common/apis/movieApi';
import { APIKey } from '../../common/apis/MovieApiKey';
import { useDispatch } from 'react-redux';
import { addMovies } from '../../features/movies/movieSlice';



const Home = () => {
  const movieText= "Marvel";
  // const dispatch = useDispatch();

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await movieApi
      .get(`?i=tt3896198&apikey=${APIKey}&s=${movieText}&type=movie`)
      .catch((err) => {
        console.log("err :", err);
      });
      console.log(response, "api")
      // dispatch(addMovies(response.data))
    };

    fetchMovies();
  }, []);


  return (
    <div>
      Home
    </div>
  );
};

export default Home;