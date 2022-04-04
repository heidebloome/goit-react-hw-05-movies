import { useEffect, useState } from 'react';
import { Outlet, useNavigate, useParams } from 'react-router-dom';

import { Button } from 'components/common/Button.styled';
import { Title } from '../HomePage/HomePage.styled';

import { Wrapper, Content, Img, List } from './MovieDetailsPage.styled';

import { ApiService } from 'services/api.service';
const apiService = new ApiService();


export const MoviesDetailsPage = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    apiService.fetchMovieDetails(movieId).then(info => {
      setMovie(info.data);
    });
  }, [movieId])

  const onCastBtnClick = () => {
    navigate('/movies/:movieId/cast')
  }

  const onReviesBtnClick = () => {
    navigate('/movies/:movieId/reviews')
  }

  return (
    <>
      <Button>Go back</Button>
      {movie && 
        <Wrapper>
            <Img src={`https://www.themoviedb.org/t/p/w440_and_h660_face/${movie.poster_path}`} alt="movie poster"/>
          <Content>
            <Title>{movie.title}</Title>
            <h3>Overview</h3>
            <p>{movie.overview}</p>
            <h3>Genres</h3>
            <List>
              {movie.genres.map(el => {
                return <li key={el.id}>{el.name}</li>
              })}
            </List>
            <h3>Additional information</h3>
            <List>
              <li><Button onClick={onCastBtnClick}>Cast</Button></li>
              <li><Button onClick={onReviesBtnClick}>Reviews</Button></li>
            </List>
          <Outlet/>
          </Content>
        </Wrapper>
      }
      </>
  )
}