import React, { Component } from "react";
import './RemoveBackground.js';
import {Helmet} from "react-helmet";



export default class Header extends Component {
  render() {
    return (
      <div>
        <Helmet>
        <header className="text-white text-center">
          <img
            alt="Logo pic"
            src="https://i.ibb.co/mvJkJks/download-30-1-1-1024x1024-1.jpg"
            width="50%"
            className="mb-4"
          />
          <h1>Background Removal Web App</h1>
          <p className="lead mb-0">Fast, simple and great performance.</p>
        </header>
        </Helmet>
      </div>
    );
  }
}
