import { Routes, Route, NavLink } from 'react-router-dom';
import { HomePage } from './pages/HomePage/HomePage';
import { MoviesPage } from './pages/MoviesPage/MoviesPage';
import { MoviesDetailsPage } from './pages/MoviesPage/MovieDetailsPage';
import { NotFound } from './NotFound';

export const App = () => {
  return (
    <>
      <nav>
        <NavLink to='/'>Home</NavLink>
        <br></br>
        <NavLink to='/movies'>Movies</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />}/>
        <Route path="/movies/:movieId" element={<MoviesDetailsPage />}>
            <Route path="cast" element={<MoviesPage />} />
            <Route path="reviews" element={<MoviesPage />}/>
        </Route>
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </>
  );
};
