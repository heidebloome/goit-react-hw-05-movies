import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Title } from '../HomePage/HomePage.styled';
import { Form, Input } from './MoviesPage.styled';
import { Button } from 'components/common/Button.styled';
import { MoviesList } from 'components/MoviesList/MoviesList';
import Loader from 'components/Loader/Loader';
import { ApiService } from 'services/api.service';
const apiService = new ApiService();

export const MoviesPage = () => {
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
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
    setIsLoading(true);
    const query = e.target.elements.searchQuery.value.trim();
    e.target.reset();

      setSearchParams({ query });
      apiService.fetchMoviesByName(query).then(info => {
        setList(info.data.results);
        setIsLoading(false);
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
      
      {isLoading
        ? <Loader />
        : (list.length === 0 ? <Title>No movies yet...</Title> : <MoviesList movies={list} />)}
      </>
  )
}