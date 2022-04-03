import { useNavigate } from 'react-router-dom';
// import propTypes from 'prop-types';

import { Item, Img } from './MovieItem.styled';

export const MovieItem = ({ movie }) => {
    let navigate = useNavigate();
    
    const onMovieClick = (id) => {
        navigate(`/movies/${id}`)
    }
    
    return (
        <Item key={movie.id} onClick={() => onMovieClick(movie.id)}>
            <Img src={`https://www.themoviedb.org/t/p/w440_and_h660_face/${movie.poster_path}`} alt='movie poster'/>
            <p>{movie.title}</p>
        </Item>)
}