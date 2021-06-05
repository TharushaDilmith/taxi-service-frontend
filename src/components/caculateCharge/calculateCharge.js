import axios from "axios";
import React, { Component } from "react";

let initialState = {
  charge: 0,
  duration: 0,
};
export default class calculateCharge extends Component {
  constructor(props) {
    super(props);
    this.state=initialState;
    this.onChange=this.onChange.bind(this);
    this.onSubmit=this.onSubmit.bind(this);
  }

  onChange(e){
      this.setState({[e.target.name]:e.target.value});
  }

  onSubmit(e)
  {
      e.preventDefault();
      axios.get("http://localhost:8000/vehicle/calculate/"+this.props.match.params.id+'&'+this.state.duration)
      .then((response)=>{
          this.setState({charge:response.data.charge});
      })
      .catch((error)=>{
          console.log(error.message);
      })
  }
  render() {
    return (
      <div className="container">
          <h2>Calculate Charge</h2>
        <form onSubmit={this.onSubmit}>
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
