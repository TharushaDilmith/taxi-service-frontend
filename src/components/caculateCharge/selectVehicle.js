import axios from 'axios';
import React, { Component } from 'react'

export default class selectVehicle extends Component {
    constructor(props){
        super(props);
        this.navigateCalculatePage=this.navigateCalculatePage.bind(this);
        this.state ={
            vehicles:[]
        }
    }
    componentDidMount()
    {
        console.log(this.props.match.params.id);
        axios.get("http://localhost:8000/category/"+this.props.match.params.id)

        .then((response)=>{
            this.setState({vehicles:response.data.vehicles});
        })
        
    }
    navigateCalculatePage(e,vehicleID){
        window.location='/calculate/'+vehicleID
    }
    render() {
        return (
            <div className="container">
                <h2>Select Vehicle</h2>
                {this.state.vehicles.length>0 && this.state.vehicles.map((vehicle,index)=>
                <div className="card mb-3" key={index} onClick={e=>this.navigateCalculatePage(e,vehicle._id)}>
                    <h4>Name : {vehicle.name}</h4>
                    <h4>Model :{vehicle.model}</h4>
                    <h4>Code :{vehicle.code}</h4>
                    <h4>Charges Per Day : {vehicle.chargesPerDay}</h4>
                </div>
                )}
            </div>
        )
    }
}
