import React, { Component } from 'react';
import {Redirect, Link} from "react-router-dom";

export default class Page extends Component {

  render () {
    return(
      <div>
      <button type="button" onClick={this.onSubmit}> <Link to='/body'>Back</Link> </button>
      <p>ya ta</p>
      </div>
    );
  }
}
