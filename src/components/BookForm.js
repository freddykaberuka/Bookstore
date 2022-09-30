import { React, useState } from 'react';
import { PropTypes } from 'prop-types';

const BookForm = ({ AddNewBook }) => {
  const [NewBook, setNewBook] = useState({ title: '', author: '' });

  return (
    <div>
      <h2>ADD NEW BOOK</h2>
      <form onSubmit={(e) => {
        AddNewBook(e, NewBook);
        setNewBook({ title: '', author: '' });
      }}
      >
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={NewBook.title}
          required
          onChange={(e) => setNewBook({ ...NewBook, title: e.target.value })}
        />
        <input
          type="text"
          name="author"
          placeholder="Author"
          value={NewBook.author}
          required
          onChange={(e) => setNewBook({ ...NewBook, author: e.target.value })}
        />
        <button type="submit" id="add-book">Add Book</button>
      </form>
    </div>
  );
};
BookForm.propTypes = {
  AddNewBook: PropTypes.func.isRequired,
};

export default BookForm;
