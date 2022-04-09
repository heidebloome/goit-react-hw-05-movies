import { useEffect, useState } from 'react';
import { MoviesList } from '../../MoviesList/MoviesList';
import { Title } from './HomePage.styled';
import Loader from 'components/Loader/Loader';
import { ApiService } from 'services/api.service';

const apiService = new ApiService();

export const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    apiService.fetchTrendingMovies().then(data => {
      setMovies(data.data.results);
      setIsLoading(false);
    });
  }, [])

  return (
      <>
        {isLoading ? <Loader /> : (<div><Title>Trending today</Title>
        <MoviesList movies={movies}/></div>)}
      </>
  )
}