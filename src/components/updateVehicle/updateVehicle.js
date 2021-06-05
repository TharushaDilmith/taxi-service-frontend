import axios from "axios";
import React, { Component } from "react";

let initialState = {
  name: " ",
  code: " ",
  type: " ",
  model: " ",
  chargesPerDay: 0,
};
export default class updateVehicle extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    axios
      .get("http://localhost:8000/vehicle/" + this.props.match.params.id)
      .then((response) => {
        console.log(response.data.data);
        this.setState({ name: response.data.data.name });
        this.setState({ code: response.data.data.code });
        this.setState({ model: response.data.data.model });
        this.setState({ chargesPerDay: response.data.data.chargesPerDay });
        this.setState({ type: response.data.data.type });
      });
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();

    let vehicle = {
      name: this.state.name,
      code: this.state.code,
      model: this.state.model,
      type: this.state.type,
      chargesPerDay: this.state.chargesPerDay,
    };

    axios
      .put(
        "http://localhost:8000/vehicle/update/" + this.props.match.params.id,
        vehicle
      )
      .then((response) => {
        console.log(response.data);
        alert("Data updated");
        location.reload();
      })
      .catch((error) => {
        alert("Update failed");
        console.log(error.message);
      });
  }
  render() {
    return (
      <div className="container">
        <h1>Update Vehicle</h1>
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
            Update
          </button>
        </form>
      </div>
    );
  }
}
