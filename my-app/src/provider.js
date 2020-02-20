import React, { Component } from 'react';
import BooksContext from './Context.js';

class MyProvider extends Component {
  constructor() {
    super()
    this.state = {
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
        {
      id: '3',
      title: 'si',
      gender: 'ja',
      style: 'venezuela'
    },
    ],
  }
}




    render() {
        return (
            <BooksContext.Provider value={{data: this.state.data}}>
                {this.props.children}
            </BooksContext.Provider>
        );
    }
}
export default MyProvider;
