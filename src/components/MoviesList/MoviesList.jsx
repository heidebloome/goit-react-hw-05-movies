import propTypes from 'prop-types';

import { MovieItem } from './MovieItem';
import { List } from './MoviesList.styled';

export const MoviesList = ({movies }) => {
    return (
        <List>
            {movies.map(el => {
                return (<MovieItem key={el.id} movie={el}/>)
            })}
        </List>
  )
}

MoviesList.propTypes = {
    movies: propTypes.arrayOf(propTypes.object).isRequired
}