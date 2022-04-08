import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Form, Input } from './MoviesPage.styled';
import { Button } from 'components/common/Button.styled';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { ApiService } from 'services/api.service';
const apiService = new ApiService();

export const MoviesPage = () => {
  const [list, setList] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchParamsQuery = searchParams.get('query');

  useEffect(() => {
    if (!searchParamsQuery) {
      return;
    }
    apiService.fetchMoviesByName(searchParamsQuery).then(info => {
      setList(info.data.results);
    })
  }, [searchParamsQuery])

  const showMovies = e => {
    e.preventDefault();
    const query = e.currentTarget.elements.searchQuery.value.trim();
    setSearchParams({ query });
    apiService.fetchMoviesByName(query).then(info => {
      setList(info.data.results);
    })
  }

  return (
      <>
      <Form onSubmit={showMovies}>
        <Input
          placeholder="Search movies"
          type="text"
          name="searchQuery"
          autocomplete="off"
        />
        <Button type="submit">Search</Button>
      </Form>
      {list && <MoviesList movies={list}/>}
      </>
  )
}