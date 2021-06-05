import React, { Component } from "react";

class NavBar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Taxi Service
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">
                  Categories
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/add-vehicle">
                  Add vehicle
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/add-category">
                  Add category
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/select-category">
                  Trip Charge
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
export default NavBar;
