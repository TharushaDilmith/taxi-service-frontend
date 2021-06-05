import axios from "axios";
import React, { Component } from "react";

export default class selectCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
    };
  }
  componentDidMount() {
    axios.get("http://localhost:8000/category/").then((response) => {
      this.setState({ categories: response.data.data });
    });
  }
  navigateVehiclePage(e,categoryID){
      window.location='/select-vehicle/'+categoryID
  }
  render() {
    return (
      <div className="container">
        <h2>Select category</h2>
        {this.state.categories.length > 0 &&
          this.state.categories.map((category, index) => (
            <div key={index} className="card nb-3" onClick={e=>this.navigateVehiclePage(e,category._id)}>
              <h4>Name : {category.name}</h4>
            </div>
          ))}
      </div>
    );
  }
}
