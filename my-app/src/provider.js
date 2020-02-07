import React from "react";

const BooksContext = React.createContext({
  id: '',
  title: '',
  gender: '',
  style: ''
});

export default BooksContext;
