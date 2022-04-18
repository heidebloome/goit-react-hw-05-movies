import { useEffect, useState } from 'react';
import { MoviesList } from '../../MoviesList/MoviesList';
import { Title } from './HomePage.styled';
import Loader from 'components/Loader/Loader';
import ImgNotAvaliable from '../../../images/01.jpg';
import { ApiService } from 'services/api.service';
const apiService = new ApiService();

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    try {
      apiService.fetchTrendingMovies().then(data => {
        data.map(el => {
          el.poster_path
            ? (el.poster_path = `https://www.themoviedb.org/t/p/w440_and_h660_face${el.poster_path}`)
            : (el.poster_path = ImgNotAvaliable);
          return el;
        })
      setMovies(data);
    });
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  }, [])

  return (
      <>
      {isLoading
        ? <Loader />
        : (<div>
            <Title>Trending today</Title>
            <MoviesList movies={movies} />
        </div>)
      }
      </>
  )
}

export default HomePage;