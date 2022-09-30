import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Book from './Book';
import BookForm from './BookForm';
import { AddBookFunc, getBooksFunc, RemoveBookFunc } from '../redux/books/books';

const Books = () => {
  const dispatch = useDispatch();
  const StoredBook = useSelector((state) => state.BooksReducer);

  useEffect(() => {
    dispatch(getBooksFunc());
  }, [dispatch]);

  const AddNewBook = (e, NewBook) => {
    e.preventDefault();
    dispatch(AddBookFunc(NewBook));
  };
  const RemoveExistingBook = (id) => {
    dispatch(RemoveBookFunc(id));
  };
  return (
    <>
      {StoredBook.map((item) => (
        <Book
          title={item.title}
          author={item.author}
          category={item.category}
          key={item.id}
          id={item.id}
          RemoveExistingBook={RemoveExistingBook}
        />
      ))}
      <BookForm AddNewBook={AddNewBook} />
    </>
  );
};

export default Books;
