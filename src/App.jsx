import { Routes, Route } from "react-router-dom";

import DashboardPage from './pages/DashboardPage'

import BooksPages from "./categories/books/booksPages/BooksPages";
import BookDetailsPage from "./categories/books/booksPages/BookDetailsPage";
import BookCreatePage from "./categories/books/booksPages/BookCreatePage";
import Navbar from "./components/Navbar";
import MyBooks from "./categories/books/booksPages/MyBooksPage";
import BookEditPage from "./categories/books/booksPages/BookEditPage";
import Discover from "./pages/DiscoverPage";
import ThoughtsPage from "./categories/Thoughts/ThoughtsPage";
import ThoughtCreate from "./categories/Thoughts/ThoughtCreate";
import MyThoughtsPage from "./categories/Thoughts/MyThoughtsPage";
// import Cloud from "./components/Cloud"

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
                <Route path="/books/mybooks" element= {<MyBooks />}/>
                 <Route path="/books/edit/:id" element= {<BookEditPage />}/>
                  <Route path="/discover" element= {<Discover />}/>

                  {/* Thoughts */}
                   <Route path="/thought" element= {<ThoughtsPage />}/>
                   <Route path="/thought/create" element= {<ThoughtCreate />}/>
                   <Route path="/thought/mythoughts" element= {<MyThoughtsPage />}/>

</Routes></div>
</div>
    </>
  )
}

export default App
