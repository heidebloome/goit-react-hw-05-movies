import { MoviesList } from 'components/MoviesList/MoviesList';
import {React, useState}from 'react';

export const MoviesPage = () => {
  const [list, setList] = useState(false);
  const showList = () => {
    setList(true);
  }
  return (
      <>
      <p>MoviesPage</p>
      {/* <input onSubmit={showList}></input> */}
      <button onClick={showList} type="button">Search</button>
      {list && <MoviesList/>}
      </>
  )
}