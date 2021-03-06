import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Loader from 'components/Loader/Loader';

const Navigation = lazy(() => import('components/Navigation/Navigation'));
const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import('pages/MoviesPage/MoviesPage/MoviesPage'));
const MoviesDetailsPage = lazy(() => import('pages/MoviesPage/MovieDetailsPage/MovieDetailsPage'));
const Cast = lazy(() => import('pages/MoviesPage/Cast/Cast'));
const Reviews = lazy(() => import('pages/MoviesPage/Review/Reviews'));
const NotFound = lazy(() => import('components/NotFound'));

export const App = () => {
  return (
    <Suspense fallback={<Loader/>}>
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
    </Suspense>
  );
};
