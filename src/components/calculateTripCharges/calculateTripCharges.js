import axios from "axios";
import React, { Component } from "react";
import Select from "react-select";
import categories from "../categories/categories";
import vehicles from "../vehicles/vehicles";

const initialState = {
  duration: 0,
  vehicles: [],
  categories: [],
  categoryOptions: [],
  selectedCategory: " ",
  selectedVehicle: " ",
  vehicleOptions: [],
  charge:0
};

export default class calculateTripCharges extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.onCategorySelect = this.onCategorySelect.bind(this);
    this.onVehicleSelect = this.onVehicleSelect.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    axios
      .get("http://localhost:8000/category/")
      .then((response) => {
        console.log(response.data.data);
        this.setState({ categories: response.data.data }, () => {
          let data = [];
          this.state.categories.map((item, index) => {
            let category = {
              value: item._id,
              label: item.name,
            };
            data.push(category);
          });
          this.setState({ categoryOptions: data });
        });
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  onCategorySelect(e) {
    this.setState({ selectedCategory: e ? e.value : null });
    if(this.state.selectedCategory !==" ")
    {
      console.log(this.state.selectedCategory);
      axios.get("http://localhost:8000/category/"+this.state.selectedCategory).then((response) => {
        console.log({ vehicles: response.data});
        this.setState({ vehicles: response.data.vehicles}, () => {
          let data = [];
          this.state.vehicles.map((item, index) => {
            let vehicle = {
              value: item._id,
              label: item.name,
            };
            data.push(vehicle);
          });
          this.setState({ vehicleOptions: data });
        });
      });
    }
    
  }

  onVehicleSelect(e) {
    this.setState({ selectedVehicle: e ? e.value : [] });
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();
    axios
      .get(
        "http://localhost:8000/vehicle/calculate/" +
          this.state.selectedVehicle +
          "&" +
          this.state.duration
      )
      .then((response) => {
        console.log(response.data);
        this.setState({charge:response.data.charge});
      });
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.onSubmit}>
          Category
          <Select
            options={this.state.categoryOptions}
            className="basic-single"
            onChange={this.onCategorySelect}
          />
          Vehicle
          <Select
            options={this.state.vehicleOptions}
            className="basic-single"
            onChange={this.onVehicleSelect}
          />
          <div className="mb-3">
            <label htmlFor="duration" className="form-label">
              Duration
            </label>
            <input
              type="Number"
              className="form-control"
              id="duration"
              name="duration"
              value={this.state.duration}
              onChange={this.onChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          <div className="mb-3">
            <label htmlFor="charge" className="form-label">
              charge
            </label>
            <input
              type="Number"
              className="form-control"
              id="charge"
              name="charge"
              value={this.state.charge}
              onChange={this.onChange}
              disabled
            />
          </div>
          
        </form>
      </div>
    );
  }
}
