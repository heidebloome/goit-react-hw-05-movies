import propTypes from 'prop-types';

import { MovieItem } from './MovieItem';
import { List } from './MoviesList.styled';

export const MoviesList = ({ movies }) => {
    return (
        <List>
            {movies.map(movie => {
                return (<MovieItem key={movie.id} movie={movie}/>)
            })}
        </List>
  )
}

MoviesList.propTypes = {
    movies: propTypes.arrayOf(propTypes.object).isRequired
}