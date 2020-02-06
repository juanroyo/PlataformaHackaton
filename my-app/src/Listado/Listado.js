import React, { Component } from 'react';
import {Redirect} from "react-router-dom";
import "./listado.css"

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
     <div>
       <div className="palsentro">
       <input value={filter} onChange={this.handleChange} />
       <button type="button" onClick={this.onSubmit}> Volver </button>
       </div>
       {filteredData.map(item => (
         <div key={item.id}>
           <div className="container">
             <br />
             <img src={item.image} width="100" height="150" />
             <h3>{item.title}</h3> <p className="classp">{item.autor}</p><p className="classp">{item.description}</p> <p className="classp">{item.genero}</p>
             <hr />
           </div>
         </div>
       ))}
     </div>
   );
 }
}

export default Listado
