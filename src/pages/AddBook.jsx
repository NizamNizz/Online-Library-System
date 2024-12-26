import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { addBook } from '../redux/booksSlice';

const AddBook = () => {
  const [formData, setFormData] = useState({ title: '', author: '', category: '', description: '', rating: '' });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBook({ ...formData, id: Date.now() }));
    navigate('/browse');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Title" required onChange={(e) => setFormData({ ...formData, title: e.target.value })} />
      <input type="text" placeholder="Author" required onChange={(e) => setFormData({ ...formData, author: e.target.value })} />
      <input type="text" placeholder="Category" required onChange={(e) => setFormData({ ...formData, category: e.target.value })} />
      <textarea placeholder="Description" required onChange={(e) => setFormData({ ...formData, description: e.target.value })}></textarea>
      <input type="number" step="0.1" placeholder="Rating" required onChange={(e) => setFormData({ ...formData, rating: e.target.value })} />
      <button type="submit">Add Book</button>
    </form>
  );
};

export default AddBook;
