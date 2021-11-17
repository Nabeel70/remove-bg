import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <div>
        <header className="text-white text-center">
          <img
            alt="Muhammad Nabeel Amin"
            src="https://i.ibb.co/N9nkZRH/img.png"
            width="120"
            className="mb-4"
          />
          <h1 className="display-4">Background Removal Web App</h1>
          <p className="lead mb-0">Fast, simple and great performance.</p>
        </header>
      </div>
    );
  }
}
