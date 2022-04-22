import { useNavigate,useLocation } from 'react-router-dom';
import propTypes from 'prop-types';
import { Item, Text } from 'components/MoviesList/MovieItem.styled';

export const MovieItem = ({ movie }) => {
    const navigate = useNavigate();
    const location = useLocation();
    
    const onMovieClick = (id) => {
        navigate(`/movies/${id}`, {state: {from: location}})
    }
    
    return (
        <Item onClick={() => onMovieClick(movie.id)}>
            <img src={movie.poster_path} alt="movie poster" />
            <Text>{movie.title}</Text>
        </Item>)
}

MovieItem.propTypes = {
    movie: propTypes.object.isRequired
}