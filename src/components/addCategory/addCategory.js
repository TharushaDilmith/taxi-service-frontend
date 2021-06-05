import axios from "axios";
import React, { Component } from "react";
import Select from "react-select";
import vehicles from "../vehicles/vehicles";
const initialState = {
  categoryName: " ",
  vehicles: [],
  options: [],
  selectedVehicle: [],
};
export default class addCategory extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onVehicleSelect = this.onVehicleSelect.bind(this);
    this.state = initialState;
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();
    let categories={
      name:this.state.categoryName,
      vehicles:this.state.selectedVehicle
    }
    axios.post("http://localhost:8000/category/add",categories)
    .then((response)=>
    {
      alert("Data successfully addes");
    })
    .catch((error)=>{
      alert("Insert error");
      console.log(error.message);
    })
  }

  onVehicleSelect(e) {
    this.setState({selectedVehicle: e?e.map(item=>item.value):[]});
  }

  componentDidMount() {
    axios.get("http://localhost:8000/vehicle/").then((response) => {
      this.setState({ vehicles: response.data.data }, () => {
        let data = [];
        this.state.vehicles.map((item, index) => {
          let vehicle = {
            value: item._id,
            label: item.name,
          };
          data.push(vehicle);
        });
        this.setState({ options: data });
      });
    });
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.onSubmit}>
          <div className="mb-3">
            <label htmlFor="categoryName" className="form-label">
              Category name
            </label>
            <input
              type="text"
              className="form-control"
              id="categoryName"
              name="categoryName"
              value={this.state.categoryName}
              onChange={this.onChange}
            />
          </div>
          <Select
            options={this.state.options}
            onChange={this.onVehicleSelect}
            className="basic-multi-select"
            isMulti
          />
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
