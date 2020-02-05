import React, { Component } from 'react';
import {Redirect} from "react-router-dom";
import "./listado.css"

class Listado extends Component {
  state = {
    filter: "",
    data: [
      {
        id: "1",
        title: "Bologna Social Enclave",
        autor: "Wu Ming",
        image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1317111168l/12733832.jpg",
        description: "www.wumingfoundation.com/italiano/downloads_ita.htm",
        genero: "Novel"
      },
      {
        id: "2",
        title: "Carcajada profunda y negra ",
        autor: "Wu Ming 1 ",
        image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1317110643l/12733812.jpg",
        description: "www.wumingfoundation.com/italiano/downloads_ita.htm ",
        genero: "Novel"
      },
      {
        id: "3",
        title: "Madame de Mauves",
        autor: "Henry James",
        image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1348571105l/2457157.jpg",
        description: "1874 novel by the prolific American-born author and literary critic of the late 19th and early 20th centuries. He spent much of his life in Europe and became a British subject shortly before his death. He is primarily known for novels, novellas and short stories based on themes of consciousness and morality.",
        genero: "Novel"
      },
      {
        id: "4",
        title: "I And My Chimney ",
        autor: "Herman Melville",
        image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1348302751l/1708839.jpg",
        description: "In those houses which are strictly double houses--that is, where the hall is in the middle--the fireplaces usually are on opposite sides; so that while one member of the household is warming himself at a fire built into a recess of the north wall, say another member, the former's own brother, perhaps, may be holding his feet to the blaze before a hearth in the south wall--the two thus fairly sitting back to back. Is this well? Be it put to any man who has a proper fraternal feeling. Has it not a sort of sulky appearance? But very probably this style of chimney building originated with some architect afflicted with a quarrelsome family.",
        genero: "Novel"
      }
    ],

  };
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