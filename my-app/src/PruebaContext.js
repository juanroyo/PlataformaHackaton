import React, { Component } from 'react';
import {Redirect,
  Link,
  Route,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Page from "./Page/page.js";
import BooksContext from "./Context.js"


class PruebaContext extends Component {


  handleChange = event => {
   this.setState({ filter: event.target.value });
 };

 /*onSubmit = (e) => {
          return  <Redirect  to="/posts/" />
   }
   const data = ({ match, data }) => {
  var product = data.find(p => d.id === Number(match.params.dataId));
  var productData;}
   var linkList = data.map(item => {
       return (
         <li key={item.id}>
           <Link to={`${match.url}/${item.id}`}>{item.title}</Link>
         </li>
       );
     });*/

 render() {
   //var match = useRouteMatch();
   return (
     <BooksContext.Consumer>
     {context => (
    <div className="palsentro">
      {console.log(context.data)}
      {Object.keys(context.data).map(item => (
          <h1 key={item}>hola {context.data[item].title}</h1>

          ))}
      </div>
       )}
      </BooksContext.Consumer>
   );
 }
}

export default PruebaContext
