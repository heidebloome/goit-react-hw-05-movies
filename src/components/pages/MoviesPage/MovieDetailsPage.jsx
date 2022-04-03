import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

export const MoviesDetailsPage = () => {
  const navigate = useNavigate();

  const onCastBtnClick = () => {
    navigate('/movies/:movieId/cast')
  }

  const onReviesBtnClick = () => {
    navigate('/movies/:movieId/reviews')
  }

  return (
      <>
      <p>MoviesDetailsPage</p>
      <button>To list</button>
      <br></br>
      <button onClick={onCastBtnClick}>Show cast</button>
      <br></br>
      <button onClick={onReviesBtnClick}>Show reviews</button>
      <Outlet/>
      </>
  )
}