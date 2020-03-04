import React, { Component } from "react";
import "./basic.css";
import firebase from 'firebase';
import Fire from "../fire.js";

//import BooksContext from "/Users/juanroyo/Documents/projects/PlataformaHackatoncopy/my-app/src/provider.js"
//import MyProvider from "/Users/juanroyo/Documents/projects/PlataformaHackaton/my-app/src/provider.js"

export default class Basic extends Component {



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
    //  this.handleChange = this.handleChange.bind(this);
      this.addBook = this.addBook.bind(this);
      this.handleAppear = this.handleAppear.bind(this);
    }

    componentDidMount() {
      return firebase
        .database()
        .ref("/")
        .once("value")
        .then(dataList => {
          this.setState({ data: dataList.val() });
          console.log(dataList.val());
        });
    }

    addMessage(e){

      const params = {
          gender:  this.inputGender.value,
          title: this.inputName.value,
          style: this.inputStyle.value
        };
        let totalUsers = 0;
        let userExists = false;
      e.preventDefault(); // <- prevent form submit from reloading the page
      // Send the message to Firebase
      var qty;
      firebase.database()
        .ref('/films')
        .once('value')
        .then(function(entries) {
          firebase.database().ref("/films/" + (entries.val() ? entries.val().length : 0)).set(params);
          //   qty = "/films/" + snapshot.numChildren()
          return qty
    })
};
    /*handleChange(title, gender, style) {
      let change = {}
    change[title.target.name] = title.target.value
    this.setState(change)
    }*/
    addBook(event) {
      event.preventDefault();

      // 1) Montar los datos a enviar
      let paquete = {};

      console.log(event.target.elements.seleccionar.value);

      // Dependiendo de si es novela o comic...
      /*if( event.target.elements.seleccionar.value == "comic") {
        paquete = {
          title : event.target.elements.title.value,

        };
      }*/

      // 2) Tener la dirección de envío


      // 3) Enviar los datos
    }

    handleAppear(event) {
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
          var f = Style => this.inputStyle = Style;
        } else if (this.state.selected == "novel") {
          var ph = "gender";
          var n = "gender";
          var v = this.state.gender;
          var f = Gender => this.inputGender = Gender;
        }
        // Si es lo otro
        // ...
        return (<input type="text" placeholder={ph} name={n} value={v} ref={f} id="username" />);
      }
    }

    render() {
      return (
        <div>
        <form onSubmit={this.addMessage.bind(this)}>
          <div className="wrap">
          <label>
            Name:
            <input type="text" name="title" id="username" placeholder="Title" ref={title => this.inputName = title}  />
            {this.drawInputs()}
          </label>
          </div>
          <label>
          Selecciona tu tipo:
          <select value={this.state.selected} name="seleccionar" onChange={this.handleAppear}>
            <option value="seleccionar" >seleccionar</option>
          <option value="novel" ref={Gender => this.inputGender = Gender}>Novel</option>
          <option value="comic" ref={Style => this.inputStyle = Style}>Comic</option>
          </select>
          </label>
          <input type="submit" value="Submit" />
        </form>
        </div>
      );
    }
}
