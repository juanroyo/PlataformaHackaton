import React, { Component } from "react";
import styles from "./styles.css";

export default class Basic extends React.Component {
  constructor() {
      super();
      this.state = {
        fields: {},
        errors: {}
      }

      this.handleChange = this.handleChange.bind(this);
      this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);
    };

    handleChange(e) {
      let fields = this.state.fields;
      fields[e.target.name] = e.target.value;
      this.setState({
        fields
      });
    }

    submituserRegistrationForm(e) {
      e.preventDefault();
      if (this.validateForm()) {
          let fields = {};
          fields["titulo"] = "";
          fields["escritor"] = "";
          fields["puntuacion"] = "";
          fields["descripcion"] = "";
          this.setState({fields:fields});
          alert("Form submitted");
      }
    }

    validateForm() {

      let fields = this.state.fields;
      let errors = {};
      let formIsValid = true;

      if (!fields["titulo"]) {
        formIsValid = false;
        errors["titulo"] = "*Please enter your titulo.";
      }

      if (typeof fields["titulo"] !== "undefined") {
        formIsValid = false;
        errors["escritor"] = "*Please enter titulo.";
      }

      if (!fields["escritor"]) {
        formIsValid = false;
        errors["escritor"] = "*Please enter escritor";
      }

      if (!fields["puntuacion"]) {
        formIsValid = false;
        errors["puntuacion"] = "*Please enter your puntuacion";
      }

      if (!fields["descripcion"]) {
        formIsValid = false;
        errors["descripcion"] = "*Please enter your descripcion.";
      }


      this.setState({
        errors: errors
      });
      return formIsValid;
    }



  render() {
    return (
    <div id="main-registration-container">
     <div id="register">
        <h3>Registration page</h3>
        <form method="post"  name="userRegistrationForm"  onSubmit= {this.submituserRegistrationForm} >
          <label>
          Seleccionar género:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="grapefruit">Comics</option>
            <option value="lime">Libros</option>
          </select>
        </label>
        <label>Titulo</label>
        <input type="text" name="titulo" value={this.state.fields.titulo} onChange={this.handleChange} />
        <div className="errorMsg">{this.state.errors.titulo}</div>
        <label>Escritor</label>
        <input type="text" name="escritor" value={this.state.fields.escritor} onChange={this.handleChange}  />
        <div className="errorMsg">{this.state.errors.escritor}</div>
        <label>puntuacion</label>
        <input type="text" name="puntuacion" value={this.state.fields.puntuacion} onChange={this.handleChange}   />
        <div className="errorMsg">{this.state.errors.puntuacion}</div>
        <label>descripcion</label>
        <input type="descripcion" name="descripcion" value={this.state.fields.descripcion} onChange={this.handleChange} />
        <div className="errorMsg">{this.state.errors.descripcion}</div>
        <input type="submit" className="button"  value="Register"/>
        </form>
    </div>
</div>

      );
  }


}
