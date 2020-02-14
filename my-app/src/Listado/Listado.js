import React, { Component } from 'react';
import {Redirect,
  Link,
  Route,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Page from "/Users/juanroyo/Documents/projects/PlataformaHackatoncopy/my-app/src/Page/page.js";
import "./listado.css"
import BooksContext from "/Users/juanroyo/Documents/projects/PlataformaHackatoncopy/my-app/src/provider.js"


class Listado extends Component {
constructor(props) {
  super(props)
    this.state = {
      filter: "",
      data: [
        {
      id: '1',
      title: '100 Años de soledad',
      gender: 'realismo fantastico',
      style: 'colombiano'
    },
        {
      id: '2',
      title: 'no',
      gender: 'si',
      style: 'colombiano'
    },
    ],
    }
}

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
  Topic ({ match }) {
  const topic = topics.find(({ id }) => id === match.params.topicId)
}
 render() {
   const { filter, data } = this.state;
   const lowercasedFilter = filter.toLowerCase();
   const filteredData = data.filter(item => {
     return Object.keys(item).some(key =>
       item[key].toLowerCase().includes(lowercasedFilter)
     );
   });
   //var match = useRouteMatch();
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
              <Link to={`${match.url}/${item.id}`}><h3>{item.title}</h3></Link>
              <p className="classp">{item.gender}</p>
              <p className="classp">{item.style}</p>
              <p className="classp">{item.genero}</p>
              <hr />
            </div>
          </div>
        ))}
        <Route path={`${match.url}/:pageId`} component={Page} />
         <Route exact path={match.url} />
      </div>
   );
 }
}

export default Listado
