import React, { Component } from 'react';
import {Redirect, Link, useParams} from "react-router-dom";


export default class Page extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("hoaaa" + this.props.params.pageId);
    var { topicId } = useParams();
    return(
      <div>
      <button type="button"> <Link to='/body'>Back</Link> </button>
      <div >
        console.log("props: " + this.props);
        <br />
        <img src={this.props.image} width="100" height="150" />
        <p>yo soy {this.props.gender}</p>
        <p>{this.props.style}</p>
        <p>{this.props.title}</p>
        <hr />
      </div>
      </div>
    );
  }
};
