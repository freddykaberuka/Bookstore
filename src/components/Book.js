import React from 'react';
import PropTypes from 'prop-types';

const Book = ({
  title, author, id, RemoveExistingBook, category,
}) => (
  <>
    <h4>{category}</h4>
    <h2>{title}</h2>
    <h4>{author}</h4>
    <button type="button">Comment</button>
    <button type="button" onClick={() => RemoveExistingBook(id)}>Remove</button>
    <button type="button">Edit</button>
    <hr />
  </>
);

Book.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  category: PropTypes.string,
  id: PropTypes.number,
  RemoveExistingBook: PropTypes.func,
};

Book.defaultProps = {
  title: '',
  author: '',
  category: '',
  id: '',
  RemoveExistingBook: null,
};

export default Book;
