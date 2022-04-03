import React from 'react';
import { Outlet } from 'react-router-dom';

export const MoviesPage = () => {
  return (
      <>
          <p>MoviesPage</p>
          <Outlet/>
      </>
  )
}