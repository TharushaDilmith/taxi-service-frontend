import React, { Component } from "react";
import Select from "react-select";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import categories from "./components/categories/categories";
import addCategory from "./components/addCategory/addCategory";
import addVehicle from "./components/addVehicle/addVehicle";
import vehicles from "./components/vehicles/vehicles";
import NavBar from './components/navBar/navBar';
import calculateCharge from "./components/caculateCharge/calculateCharge";
import selectCategory from "./components/caculateCharge/selectCategory";
import selectVehicle from "./components/caculateCharge/selectVehicle";
import updateVehicle from "./components/updateVehicle/updateVehicle";
import updateCategory from "./components/updateCategory/updateCategory";


export default class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <section>
            <Switch>
              <Route exact path="/" component={categories} />
              <Route path="/add-category" component={addCategory} />
              <Route path="/add-vehicle" component={addVehicle} />
              <Route exact path="/select-category" component={selectCategory}/>
              <Route path ="/select-vehicle/:id" component={selectVehicle}/>
              <Route path ="/calculate/:id" component={calculateCharge}/>
              <Route path="/update/:id" component={updateVehicle}/>
              <Route path="/category/update/:id" component={updateCategory}/>
              <Route exact path="/:id" component={vehicles} />


              
            </Switch>
          </section>
        </Router>
      </div>
    );
  }
}
