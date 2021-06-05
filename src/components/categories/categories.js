import axios from "axios";
import React, { Component } from "react";

export default class categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
    };
    this.onClickUpdate=this.onClickUpdate.bind(this);
  }
  componentDidMount() {
    axios.get("http://localhost:8000/category/").then((response) => {
      this.setState({ categories: response.data.data });
    });
  }
  navigateVehiclePage(e,categoryID){
      window.location='/'+categoryID
  }
  onClickUpdate(e,vehicleID)
  {
      window.location='/category/update/'+vehicleID
  }
  render() {
    return (
      <div className="container">
        <h1>Categories</h1>
        {this.state.categories.length > 0 &&
          this.state.categories.map((category, index) => (
            <div key={index} className="nb-3">
              <h4>Name : {category.name}</h4>
              <button type="View" className="btn btn-primary mr-2" onClick={e=>this.navigateVehiclePage(e,category._id)}>
                View
              </button>
              <button type="update" className="btn btn-primary m-3" onClick={e=>this.onClickUpdate(e,category._id)}>
                Update
              </button>
              <button type="delete" className="btn btn-primary mr-2" onClick={e=>this.onClickRemove(e,category._id)}>
                Delete
              </button>
              
            </div>
          ))}
      </div>
    );
  }
}
