import { useEffect, useState } from 'react';
import { MoviesList } from '../../MoviesList/MoviesList';
import { Title } from './HomePage.styled';
import { ApiService } from 'services/api.service';

const apiService = new ApiService();

export const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    apiService.fetchTrendingMovies().then(data => {
      setMovies(data.data.results);
    });
  }, [])

  return (
      <>
        <Title>Trending today</Title>
        <MoviesList movies={movies}/>
      </>
  )
}