import { Routes, Route } from 'react-router-dom';
import { Navigation } from './Navigation/Navigation';
import { HomePage } from './pages/HomePage/HomePage';
import { MoviesPage } from './pages/MoviesPage/MoviesPage';
import { MoviesDetailsPage } from './pages/MoviesPage/MovieDetailsPage';
import { Cast } from './pages/MoviesPage/Cast';
import { Reviews } from './pages/MoviesPage/Reviews';
import { NotFound } from './NotFound';

export const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Navigation />} >
          <Route index element={<HomePage />}/>
          <Route path="movies" element={<MoviesPage />}/>
          <Route path="movies/:movieId" element={<MoviesDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />}/>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
  );
};
