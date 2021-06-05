import axios from "axios";
import React, { Component } from "react";
import Select from 'react-select';

let initialState ={
    categoryName : " ",
    options:[]
}
export default class updateCategory extends Component {
  constructor(props) {
    super(props);
    this.state=initialState;
    this.onChange=this.onChange.bind();
  }
  componentDidMount(){
      axios.get("http://localhost:8000/category/category/"+this.props.match.params.id)
      .then((response)=>{
          console.log(response.data.data.vehicles);
          this.setState({categoryName:response.data.data.name});

      })
  }
  onChange(e)
  {
      this.setState({[e.target.name]:e.target.value});
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
