import { useEffect, useState } from 'react';
import { Outlet, useNavigate, useParams } from 'react-router-dom';

import { Container } from 'components/common/Container.styled';
import { Button } from 'components/common/Button.styled';
import { StyledLink, Wrapper, Content, Title, SubTitle, Img, List, Item } from './MovieDetailsPage.styled';

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

  const onBtnClick = (page) => {
    navigate(`/movies/${movieId}/${page}`);
  }

  return (
    <Container>
      <StyledLink to='/'>&#8592; Go back</StyledLink>
      {movie && 
        <Wrapper>
          <Img src={`https://www.themoviedb.org/t/p/w440_and_h660_face/${movie.poster_path}`} alt="movie poster"/>
          <Content>
            <Title>{movie.title}</Title>
            <SubTitle>Overview</SubTitle>
            <p>{movie.overview}</p>
            <SubTitle>Genres</SubTitle>
            <List>
              {movie.genres.map(el => {
                return <li key={el.id}>{el.name}</li>
              })}
            </List>
            <SubTitle>Additional information</SubTitle>
            <List btn ls>
              <Item mr><Button onClick={() => onBtnClick('cast')}>Cast</Button></Item>
              <Item mr><Button onClick={() => onBtnClick('reviews')}>Reviews</Button></Item>
            </List>
            <Outlet/>
          </Content>
        </Wrapper>
      }
      </Container>
  )
}