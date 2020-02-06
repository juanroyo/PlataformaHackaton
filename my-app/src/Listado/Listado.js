import React, { Component } from 'react';
import {Redirect} from "react-router-dom";
import "./listado.css"
import BooksContext from "/Users/juanroyo/Documents/projects/PlataformaHackatoncopy/my-app/src/provider.js"

class Listado extends Component {


  handleChange = event => {
   this.setState({ filter: event.target.value });
 };

 onSubmit = (e) => {
          return  <Redirect  to="/posts/" />
   }

 render() {
   const { filter, data } = this.state;
   const lowercasedFilter = filter.toLowerCase();
   const filteredData = data.filter(item => {
     return Object.keys(item).some(key =>
       item[key].toLowerCase().includes(lowercasedFilter)
     );
   });
   return (
    <div className="palsentro">
     <BooksContext.Consumer>
      {BooksUser => (
        <div>
          <p>
            Your username is <strong>{BooksUser.title}</strong>
          </p>
        </div>
      )}
     </BooksContext.Consumer>
      </div>
   );
 }
}

export default Listado
