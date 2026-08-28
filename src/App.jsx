import { Routes, Route } from "react-router-dom";

import DashboardPage from "./pages/DashboardPage";

import BooksPages from "./categories/books/booksPages/BooksPages";
import BookDetailsPage from "./categories/books/booksPages/BookDetailsPage";
import BookCreatePage from "./categories/books/booksPages/BookCreatePage";
import Navbar from "./components/Navbar";
import MyBooks from "./categories/books/booksPages/MyBooksPage";
import BookEditPage from "./categories/books/booksPages/BookEditPage";

import Discover from "./pages/DiscoverPageMood";
import DiscoveredPageCategory from "./pages/DiscoveredPageCategory";

import ThoughtsPage from "./categories/Thoughts/pages/ThoughtsPage";
import ThoughtCreate from "./categories/Thoughts/pages/ThoughtCreate";
import MyThoughtsPage from "./categories/Thoughts/pages/MyThoughtsPage";

import MoviesPage from "./categories/Movies/pages/MoviesPage";
import MovieCreate from "./categories/Movies/pages/MovieCreate";
import MyMoviesPage from "./categories/Movies/pages/MyMoviesPage";
import MoviesDetails from "./categories/Movies/pages/MoviesDetails";
import MoviesEdit from "./categories/Movies/pages/MoviesEdit";
import SongsPage from "./categories/Songs/Pages/SongsPage";
import MySongsPage from "./categories/Songs/Pages/MySongsPage";
import SongCreate from "./categories/Songs/Pages/SongCreate";

import ChartPage from "./pages/ChartPage";
import AboutMePage from "./pages/AboutMePage";

import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <>
      <div className="min-h-screen md:flex">
        {/* <Cloud/> */}
        <Navbar />

        <div className="flex-1 min-w-0">
          <Routes>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/booksPage" element={<BooksPages />} />
            <Route path="/booksPage/:id" element={<BookDetailsPage />} />
            <Route path="/books/create" element={<BookCreatePage />} />
            <Route path="/books/mybooks" element={<MyBooks />} />
            <Route path="/books/edit/:id" element={<BookEditPage />} />

            <Route path="/discover" element={<Discover />} />
            <Route
              path="/discover/category"
              element={<DiscoveredPageCategory />}
            />

            {/* Thoughts */}
            <Route path="/thought" element={<ThoughtsPage />} />
            <Route path="/thought/create" element={<ThoughtCreate />} />
            <Route path="/thought/mythoughts" element={<MyThoughtsPage />} />

            {/* Movies */}
            <Route path="/moviespage" element={<MoviesPage />} />

            <Route path="/movies/create" element={<MovieCreate />} />

            <Route path="/movies/mymovies" element={<MyMoviesPage />} />
            <Route path="/moviespage/:id" element={<MoviesDetails />} />
            <Route path="/movies/edit/:id" element={<MoviesEdit />} />

            {/* Songs */}
            <Route path="/songs" element={<SongsPage />} />
            {/* <Route path="/songs/:id" element= {<SongsDetailsPage />}/> */}
            <Route path="/songs/mysongs" element={<MySongsPage />} />
            <Route path="/songs/create" element={<SongCreate />} />

            <Route path="/chart" element={<ChartPage />} />
            <Route path="/aboutme" element={<AboutMePage />} />

            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
