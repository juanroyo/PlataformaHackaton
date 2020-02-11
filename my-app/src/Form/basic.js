import React, { Component } from "react";
import "./basic.css"
import Fire from "/Users/juanroyo/Documents/projects/PlataformaHackatoncopy/my-app/src/fire.js";
//import BooksContext from "/Users/juanroyo/Documents/projects/PlataformaHackatoncopy/my-app/src/provider.js"
//import MyProvider from "/Users/juanroyo/Documents/projects/PlataformaHackaton/my-app/src/provider.js"

export default class Basic extends Component {
  componentDidMount(){
    /* Create reference to messages in Firebase Database */
    let messagesRef = Fire.database().ref('data').orderByKey().limitToLast(100);
    messagesRef.on('child_added', snapshot => {
      /* Update React state when message is added at Firebase Database */
      let message = { text: snapshot.val(), id: snapshot.key };
      this.setState({ data: [message].concat(this.state.data) });
    })
  }
  addMessage(e){
    e.preventDefault(); // <- prevent form submit from reloading the page
    /* Send the message to Firebase */
    Fire.database().ref('data').push( this.inputEl.title );
    Fire.database().ref('data').push( this.inputEl.gender );
    Fire.database().ref('data').push( this.inputEl.style );
    this.inputEl.value = ''; // <- clear the input
  }

  constructor(props) {
      super(props);
      this.state = {
        data: [
          {
            id: "",
            title: "",
            gender: "",
            style: ""
          },
        ],
        data2: [
          {
            selected: "seleccionar",
            display: "none",
            display1: "none"
          }
        ]
      }
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleAppear = this.handleAppear.bind(this);
    }

    handleChange(title, gender, style) {
      let change = {}
    change[title.target.name] = title.target.value
    this.setState(change)

    }
    /*handleChange(event) {
      this.setState({value: event.target.value});

    }*/

    handleSubmit(event) {
      alert('A name was submitted: ' + event.target.value);
      event.preventDefault();
    }

    handleAppear(event) {
      /*if (event.target.value == "comic") {
        this.setState({display: "block"})
      } else {
        this.setState({display: "none"})
      }
      if (event.target.value == "novel") {
        this.setState({display1: "block"})
      } else {
        this.setState({display1: "none"})
      }
      if (event.target.value == "seleccionar") {
        this.setState({display: "none"})
        this.setState({display1: "none"})
      }*/
      this.setState({selected: event.target.value})
    }

    drawInputs() {
      // En funcion del selected...
      if(this.state.selected != "seleccionar") {
        // Si es comic
        if(this.state.selected == "comic") {
          var ph = "Style";
          var n = "style";
          var v = this.state.style;
        } else if (this.state.selected == "novel") {
          var ph = "gender";
          var n = "gender";
          var v = this.state.gender;
        }
        // Si es lo otro
        // ...
        return (<input type="text" placeholder={ph} name={n} value={v} ref={ el => this.inputEl = el } />);
      }
    }

    render() {
      return (
        <div>
        <form onSubmit={this.addMessage.bind(this)}>
          <div className="wrap">
          <label>
            Name:
            <input type="text" name="title" placeholder="Title" ref={ el => this.inputEl = el } />
            {this.drawInputs()}
            {/*
            <input type="text" style={{display: this.state.display}} placeholder="Estilo" name="style" value={this.state.gender} onChange={this.handleChange.bind(this)} />
            <input type="text" style={{display: this.state.display1}} placeholder="gender" name="gender" value={this.state.style} onChange={this.handleChange.bind(this)} />
            */}
          </label>
          </div>
          <label>
          Selecciona tu tipo:
          <select value={this.state.selected} name="seleccionar" onChange={this.handleAppear}>
            <option value="seleccionar" >seleccionar</option>
            <option value="novel">Novel</option>
            <option value="comic">Comic</option>
          </select>
          </label>
          <input type="submit" value="Submit" />
        </form>
        )}
        </div>
      );
    }
}
/*<select value={this.state.selection} onChange={this.handleAppear}>
  <option value={this.state.selection[0]} name="seleccionar">seleccionar</option>
  <option value={this.state.selection[1]} name="novel">Novel</option>
  <option value={this.state.selection[2]} name="comic">Comic</option>
</select>*/
