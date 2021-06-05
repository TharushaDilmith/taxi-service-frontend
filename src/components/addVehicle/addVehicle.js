import React, { Component } from "react";
import axios from "axios";

let initialState = {
  name: " ",
  code: " ",
  model: " ",
  chargesPerDay: 0,
  type: " ",
};

export default class addVehicle extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = initialState;
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const vehicle = {
      name: this.state.name,
      code: this.state.code,
      model: this.state.model,
      type: this.state.type,
      chargesPerDay: this.state.chargesPerDay,
    };
    axios
      .post("http://localhost:8000/vehicle/add", vehicle)
      .then((response) => {
        alert("Data successfully submited");
      })
      .catch((error) => {
        console.log({ error: error.message });
        alert("Insert error");
      });
  }

  render() {
    return (
      <div className="container">
        <h1>Add Vehicle</h1>
        <form onSubmit={this.onSubmit}>
          <div className="mb-3">
            <label for="vehicleName" className="form-label">
              Vehicle name
            </label>
            <input
              type="text"
              className="form-control"
              id="vehicleName"
              name="name"
              value={this.state.name}
              onChange={this.onChange}
            />
          </div>
          <div className="mb-3">
            <label for="code" className="form-label">
              Code
            </label>
            <input
              type="text"
              className="form-control"
              id="code"
              name="code"
              value={this.state.code}
              onChange={this.onChange}
            />
          </div>
          <div className="mb-3">
            <label for="model" className="form-label">
              model
            </label>
            <input
              type="text"
              className="form-control"
              id="model"
              name="model"
              value={this.state.model}
              onChange={this.onChange}
            />
          </div>
          <div className="mb-3">
            <label for="type" className="form-label">
              type
            </label>
            <input
              type="text"
              className="form-control"
              id="type"
              name="type"
              value={this.state.type}
              onChange={this.onChange}
            />
          </div>
          <div className="mb-3">
            <label for="chargesPerDay" className="form-label">
              Charges Per Day
            </label>
            <input
              type="Number"
              className="form-control"
              id="chargesPerDay"
              name="chargesPerDay"
              value={this.state.chargesPerDay}
              onChange={this.onChange}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
