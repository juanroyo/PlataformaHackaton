import React, { Component } from 'react';
import {Redirect,
  Link,
  Route,
  useRouteMatch,
  useParams
} from "react-router-dom";
//import Page from "./Page/page.js";
import "./listado.css";
import firebase from 'firebase';
import BooksContext from "../Context.js";



class Listado extends Component {
constructor(props) {
  super(props)
    this.state = {
      filter: "",
      books: [],
    }
    this.Getbooks = this.GetBooks.bind(this);
}
/*handleChange = event => {
  this.setState({ filter: event.target.value });
}*/

  handleChange = event => {
   this.setState({ filter: event.target.value }, () => {
       this.GetBooks();
   });
 };

GetBooks() {
   return firebase
     .database()
     .ref("/")
     .once("value")
     .then(booksList => {
       this.setState({ books: booksList.val() });
       console.log("hola" + booksList.val());
     });
 }
 componentDidMount() {
   // GitHub API URL
   const url = 'http://openlibrary.org/people/george08/lists/OL97L/subjects.json?limit=';
   // make the API call
   fetch(url)
       .then(res => res.json())
       .then(data => this.setState({ books: data.subjects }))

        .catch(err => {
           console.error('Error: ', err);
       });

}

 render() {
   const { filter, books } = this.state;
   const lowercasedFilter = filter.toLowerCase();
   const filteredData = books.filter(item => {
     return Object.keys(item).some(key =>
       typeof item[key] === "string" && item[key].toLowerCase().includes(lowercasedFilter)
     );
   });
   //var match = useRouteMatch();
   return (
     <BooksContext.Consumer>
       {context => (
    <div className="palsentro">
        <div className="palsentro">
        <input value={filter} onChange={this.handleChange} />
        <button type="button" onClick={this.onSubmit}> <Link to='/body'>Back</Link> </button>
        </div>
        {/*{Object.keys(context.data).map(item =>
          <div key={item}>
            <div className="container">
              <br />
              <img src={context.data[item].image} width="100" height="150" />
              <h3>{context.data[item].title}</h3>
              <p className="classp">{context.data[item].gender}</p>
              <p className="classp">{context.data[item].style}</p>
              <p className="classp">{context.data[item].genero}</p>
              <hr />
            </div>
          </div>
        )}*/}
        {filteredData.map(book => (
          <li>
            <p>{book.name}</p>
          </li>
        ))}
      </div>
      )}
      </BooksContext.Consumer>
   );
 }
}

export default Listado
