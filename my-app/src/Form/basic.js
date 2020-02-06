import React, { Component } from "react";
import "./basic.css"
//import MyProvider from "/Users/juanroyo/Documents/projects/PlataformaHackaton/my-app/src/provider.js"

export default class Basic extends Component {
  constructor(props) {
      super(props);
      this.state = {
        titulo: '',
        gender: '',
        estilo: '',

        selected: 'seleccionar',
        display: "none",
        display1: "none"
      };

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleAppear = this.handleAppear.bind(this);
    }

    handleChange(e) {
      let change = {}
    change[e.target.name] = e.target.value
    this.setState(change)
    console.log(this.state.titulo)
    }
    /*handleChange(event) {
      this.setState({value: event.target.value});

    }*/

    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
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
          var ph = "Estilo";
          var n = "estilo";
          var v = this.state.estilo;
        } else if (this.state.selected == "novel") {
          var ph = "Gender";
          var n = "gender";
          var v = this.state.gender;
        }

        // Si es lo otro
        // ...

        return (<input type="text" placeholder={ph} name={n} value={v} onChange={this.handleChange.bind(this)} />);
      }
    }

    render() {
      return (
        <div>
        <form onSubmit={this.handleSubmit}>
          <div className="wrap">
          <label>
            Name:
            <input type="text" name="titulo" value={this.state.titulo} placeholder="Titulo" onChange={this.handleChange.bind(this)} />
            {this.drawInputs()}
            {/*
            <input type="text" style={{display: this.state.display}} placeholder="Estilo" name="estilo" value={this.state.gender} onChange={this.handleChange.bind(this)} />
            <input type="text" style={{display: this.state.display1}} placeholder="Gender" name="gender" value={this.state.estilo} onChange={this.handleChange.bind(this)} />
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
        </div>
      );
    }
}
/*<select value={this.state.selection} onChange={this.handleAppear}>
  <option value={this.state.selection[0]} name="seleccionar">seleccionar</option>
  <option value={this.state.selection[1]} name="novel">Novel</option>
  <option value={this.state.selection[2]} name="comic">Comic</option>
</select>*/
