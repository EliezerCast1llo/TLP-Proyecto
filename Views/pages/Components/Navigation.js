import React, { Component } from 'react';

class Navigation extends Component {
  render() {
    return (
      <nav>
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">

          <a className="navbar-brand" href="#">IDE</a>


          <ul className="navbar-nav">

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                {this.props.mainname}
              </a>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="#">{this.props.titulo}</a>
                <a className="dropdown-item disabled" href="#">{this.props.titulo2}</a>
                <a className="dropdown-item disabled" href="#">{this.props.titulo3}</a>
              </div>
            </li>

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                Editar
      </a>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="#">Copiar</a>
                <a className="dropdown-item" href="#">Pegar</a>
                <a className="dropdown-item" href="#">Modificar</a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Ayuda</a>
            </li>

          </ul>
        </nav>
      </nav>
    );
  }
}

export default Navigation;