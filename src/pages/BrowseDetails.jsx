import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const BookDetails = () => {
  const { id } = useParams();
  const book = useSelector((state) =>
    state.books.books.find((book) => book.id === parseInt(id))
  );

  if (!book) {
    return <p>Book not found.</p>;
  }

  return (
    <div>
      <h2>{book.title}</h2>
      <p><strong>Author:</strong> {book.author}</p>
      <p>{book.description}</p>
      <p><strong>Rating:</strong> {book.rating}</p>
      <Link to="/browse">Back to Browse</Link>
    </div>
  );
};

export default BookDetails;