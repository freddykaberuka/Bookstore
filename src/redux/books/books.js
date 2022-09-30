const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';
const books = [{ id: 1, author: 'Michelle de Kretser', title: 'SCARY MONSTERS' },
  { id: 2, author: 'Hernan Diaz', title: 'TRUST' },
  { id: 3, author: 'Susan Straight', title: 'MECCA' },
  { id: 4, author: 'Lindsey Fitzharris ', title: 'THE FACEMAKER' }];

export const AddBookFunc = (NewBook) => ({
  type: ADD_BOOK,
  payload: NewBook,
});
export const RemoveBookFunc = (id) => ({
  type: REMOVE_BOOK,
  id,
});

const BooksReducer = (state = books, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        {
          id: Date.now(),
          title: action.payload.title,
          author: action.payload.author,
        },
      ];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
};

export default BooksReducer;
