import { useSelector } from 'react-redux';
import { useState } from 'react';
import SearchBar from '../components/SearchBar';
import BookCard from '../components/BookCard';

const BrowseBooks = () => {
  const books = useSelector((state) => state.books.books);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    book.author.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <SearchBar onSearch={setSearchQuery} />
      {filteredBooks.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
};

export default BrowseBooks;
