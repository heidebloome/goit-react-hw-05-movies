import propTypes from 'prop-types';

import { MovieItem } from './MovieItem';
import { List } from './MoviesList.styled';

export const MoviesList = ({movies}) => {
    return (
        <List>
            {movies.map(el => {
                return (<MovieItem movie={el}/>)
            })}
        </List>
  )
}

MoviesList.propTypes = {
    movies: propTypes.array.isRequired
}