import axios from "axios";
import React, { Component } from "react";

export default class vehicles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vehicles: [],
      
    }
    this.onClickRemove=this.onClickRemove.bind(this),
    this.onClickUpdate=this.onClickUpdate.bind(this)
  }
  componentDidMount() {
    console.log(this.props.match.params.id);
    axios
      .get("http://localhost:8000/category/" + this.props.match.params.id)

      .then((response) => {
        this.setState({ vehicles: response.data.vehicles });
      });
  }
  onClickRemove(e,vehicleID)
  {
    axios.delete("http://localhost:8000/vehicle/remove/"+vehicleID)
    .then((response)=>{
        alert("Vehicle removed");
        location.reload();
    })
    .catch((error)=>{
        alert("Remove failed");
        console.log(error.message);
    })
  }
  onClickUpdate(e,vehicleID)
  {
      window.location ='/update/'+vehicleID
  }
  render() {
    return (
      <div className="container">
        <h1>Category Vehicles</h1>
        {this.state.vehicles.length > 0 &&
          this.state.vehicles.map((vehicle, index) => (
            <div
              className="mb-3"
              key={index}
            >
              <h4>Name : {vehicle.name}</h4>
              <h4>Model :{vehicle.model}</h4>
              <h4>Code :{vehicle.code}</h4>
              <h4>Charges Per Day : {vehicle.chargesPerDay}</h4>
              <button type="delete" className="btn btn-primary mr-2" onClick={e=>this.onClickRemove(e,vehicle._id)}>
                Delete
              </button>
              <button type="update" className="btn btn-primary m-3" onClick={e=>this.onClickUpdate(e,vehicle._id)}>
                Update
              </button>
            </div>
          ))}
      </div>
    );
  }
}
