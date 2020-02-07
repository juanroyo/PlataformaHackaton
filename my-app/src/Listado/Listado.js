import React, { Component } from 'react';
import {Redirect, Link} from "react-router-dom";
import "./listado.css"
import BooksContext from "/Users/juanroyo/Documents/projects/PlataformaHackatoncopy/my-app/src/provider.js"

class Listado extends Component {
    state = {
      filter: "",
      data: [
        {
      id: '1',
      title: '100 Años de soledad',
      gender: 'realismo fantastico',
      style: 'colombiano'
    },
    ],
    }

  handleChange = event => {
   this.setState({ filter: event.target.value });
 };

 /*onSubmit = (e) => {
          return  <Redirect  to="/posts/" />
   }*/

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
        <div className="palsentro">
        <input value={filter} onChange={this.handleChange} />
        <button type="button" onClick={this.onSubmit}> <Link to='/body'>Back</Link> </button>
        </div>
        {filteredData.map(item => (
          <div key={item.id}>
            <div className="container">
              <br />
              <img src={item.image} width="100" height="150" />
              <Link to="/page"><h3>{item.title}</h3></Link>
              <p className="classp">{item.gender}</p>
              <p className="classp">{item.style}</p>
              <p className="classp">{item.genero}</p>
              <hr />
            </div>
          </div>
        ))}
      </div>
   );
 }
}

export default Listado
