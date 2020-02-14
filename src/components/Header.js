import React, { Component } from "react";
import '../App.css';

class Header extends Component {
  render() {
    return (
      <div className="text-center">
        <img
          src="https://gorila.com.br/assets/img/logo.svg"
          width="200"
          style={{ marginTop: "20px" }}
        />
        <hr />
        <h3>Carteira de investimentos</h3>
      </div>
    );
  }
}

export default Header;