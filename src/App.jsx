import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import BrowseBooks from './pages/BrowseBooks';
import BookDetails from './pages/BrowseDetails';
import AddBook from './pages/AddBook';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <a href="/">Home</a>
          <a href="/browse">Browse Books</a>
          <a href="/add">Add Book</a>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/browse" element={<BrowseBooks />} />
          <Route path="/books/:id" element={<BookDetails />} />
          <Route path="/add" element={<AddBook />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
