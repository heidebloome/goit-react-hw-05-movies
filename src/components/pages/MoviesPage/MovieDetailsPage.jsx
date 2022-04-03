import React from 'react';
import { Outlet } from 'react-router-dom';

export const MoviesDetailsPage = () => {
  return (
      <>
          <p>MoviesDetailsPage</p>
          <button>To list</button>
          <Outlet/>
      </>
  )
}