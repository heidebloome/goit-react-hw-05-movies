import { useNavigate } from 'react-router-dom';
import propTypes from 'prop-types';

import { Item, Text } from './MovieItem.styled';

export const MovieItem = ({ movie }) => {
    const navigate = useNavigate();
    
    const onMovieClick = (id) => {
        navigate(`/movies/${id}`)
    }
    
    return (
        <Item onClick={() => onMovieClick(movie.id)}>
            <img src={`https://www.themoviedb.org/t/p/w440_and_h660_face/${movie.poster_path}`} alt='movie poster'/>
            <Text>{movie.title}</Text>
        </Item>)
}

MovieItem.propTypes = {
    movie: propTypes.object.isRequired
}