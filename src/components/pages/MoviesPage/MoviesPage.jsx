import { useState } from 'react';

import { Form, Input } from './MoviesPage.styled';
import { Button } from 'components/common/Button.styled';

import { MoviesList } from 'components/MoviesList/MoviesList';

import { ApiService } from 'services/api.service';
const apiService = new ApiService();

export const MoviesPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [list, setList] = useState(false);

  const searchQueryHandler = e => {
    setSearchQuery(e.target.value);
  };

  const showMovies = (e) => {
    e.preventDefault();

    const query = searchQuery.trim();

    apiService.fetchMoviesByName(query).then(info => {
      setList(info.data.results);
    })

    setSearchQuery('');
  }

  return (
      <>
      <Form onSubmit={showMovies}>
        <Input
          onChange={searchQueryHandler}
          value={searchQuery}
          placeholder="Search movies"
          type="text"
          autocomplete="off"
        />
        <Button type="submit">Search</Button>
      </Form>
      {list && <MoviesList movies={list}/>}
      </>
  )
}