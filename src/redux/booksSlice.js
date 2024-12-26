import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [
    { id: 1, title: 'Dune', author: 'Frank Herbert', category: 'Sci-Fi', description: 'A science fiction classic.', rating: 4.8 },
    { id: 2, title: '1984', author: 'George Orwell', category: 'Fiction', description: 'Dystopian novel.', rating: 4.5 },
    { id: 3, title: 'Sapiens', author: 'Yuval Noah Harari', category: 'Non-Fiction', description: 'A brief history of humankind.', rating: 4.6 },
  ],
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
  },
});

export const { addBook } = booksSlice.actions;
export default booksSlice.reducer;
