import React, { Component } from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import "./Body.css"

export default class Body extends Component {
  render() {
    return (
      <div className="jumbotron" >
        <Jumbotron fluid>

        <h1 className="Header">LIBROS PARA TODOS</h1>
              <div className="App">
          {/*Aqui utilizamos la url donde esta alojada la imagen*/}
          <img src="https://cdn.pixabay.com/photo/2016/09/10/17/18/book-1659717_960_720.jpg" />
          
          </div>
            <p className="Header">
              Un texto es una composición de signos codificados en un sistema de escritura que forma una unidad de sentido.              También es una composición de caracteres imprimibles (con grafema) generados por un algoritmo de cifrado que, aunque no tienen sentido para cualquier persona, sí puede ser descifrado por su destinatario original. En otras palabras, un texto es un entramado de signos con una intención comunicativa que adquiere sentido en determinado contexto.              Las ideas que comunica un texto están contenidas en lo que se suele denominar «macroproposiciones», unidades estructurales de nivel superior o global, que otorgan coherencia al texto constituyendo su hilo central, el esqueleto estructural que cohesiona elementos lingüísticos formales de alto nivel, como los títulos y subtítulos, la secuencia de párrafos, etc. En contraste, las «microproposiciones» son los elementos coadyuvantes de la cohesión de un texto, pero a nivel más particular o local.  Esta distinción fue realizada por Teun van Dijk en 1980.1              El nivel microestructural o local está asociado con el concepto de cohesión. Se refiere a uno de los fenómenos propios de la coherencia, el de las relaciones particulares y locales que se dan entre elementos lingüísticos, tanto los que remiten unos a otros como los que tienen la función de conectar y organizar. También es un conjunto de oraciones agrupadas en párrafos que habla de un tema determinado.
            </p>
            </Jumbotron>
            </div>
    )
  }
}
