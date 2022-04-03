import React from 'react';
import { useNavigate } from 'react-router-dom';

const moviesList = [1, 2, 3];

export const MoviesList = () => {
    let navigate = useNavigate();
    
    const onMovieClick = () => {
        navigate('/movies/:movieId')
    }
    return (
        <ul>
            {moviesList.map(el => {
               return( <li onClick={onMovieClick}>{el}</li>)
            })}
        </ul>
  )
}