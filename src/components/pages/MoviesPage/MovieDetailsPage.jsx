import { useEffect, useState } from 'react';
import { Outlet, useNavigate, useParams, useLocation } from 'react-router-dom';
import { Container } from 'components/common/Container.styled';
import { Button } from 'components/common/Button.styled';
import { StyledLink, Wrapper, Content, Title, SubTitle, Img, List, Item } from './MovieDetailsPage.styled';
import Loader from 'components/Loader/Loader';
import ImgNotAvaliable from '../../../images/01.jpg';
import { ApiService } from 'services/api.service';
const apiService = new ApiService();

const MoviesDetailsPage = () => {
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [goBackToLink] = useState(() => {
    return location.state ? (location.state.from.pathname + location.state.from.search) : '/';
  });

  useEffect(() => {
    setIsLoading(true);
    try {
      apiService.fetchMovieDetails(movieId).then(data => {
        data.poster_path
          ? (data.poster_path = `https://www.themoviedb.org/t/p/w440_and_h660_face/${data.poster_path}`)
          : (data.poster_path = ImgNotAvaliable);
        setMovie(data);
    });
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  }, [movieId])

  const onBtnClick = (page) => {
    navigate(`/movies/${movieId}/${page}`);
  }

  return (
    <Container>
      {isLoading
        ? <Loader />
        : (<div>
          <StyledLink to={goBackToLink}>&#8592; Go back</StyledLink>
          {movie && 
            <Wrapper>
              <Img src={movie.poster_path} alt="movie poster"/>
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
          </div>)}
    </Container>
  )
}

export default MoviesDetailsPage;