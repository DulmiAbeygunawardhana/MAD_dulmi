import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/pages/navbar";


import ManageRadiologyPatient from './components/pages/manageRadiologyPatient';
import AddRadiologyPatient from './components/pages/addRadiologyPatient';
import ViewRadiologyPatient from './components/pages/viewRadiologyPatient';
import EditRadiologyPatient from './components/pages/editRadiologyPatient';
import CalRadiologyCost from './components/pages/calRadiologyCost';
import ViewRadiologyCost from './components/pages/viewRadiologyCost';
import SearchRadiology from './components/pages/searchRadiology';
import SearchRadiologyCost from './components/pages/searchRadiologyCost';
import RadiologyReport from './components/pages/radiologyReport';

import ManageTransport from './components/pages/manageTransport';
import AddTransport from './components/pages/addTransport';
import ViewTransport from './components/pages/viewTransport';
import EditTransport from './components/pages/editTransport';
import SearchTransport from './components/pages/searchTransport';

function App() {
  return (
    <Router>
      <Navbar/>
       <div className>
       
        <br/>
     
        <Route path='/manageRadiologyPatient' component={ManageRadiologyPatient} />
        <Route path='/addRadiologyPatient' component={AddRadiologyPatient} />
        <Route path='/viewRadiologyPatient' component={ViewRadiologyPatient} />
        <Route path='/editRadiologyPatient/:id' component={EditRadiologyPatient} />
        <Route path='/calRadiologyCost' component={CalRadiologyCost} />
        <Route path='/viewRadiologyCost' component={ViewRadiologyCost} />
        <Route path='/searchRadiology' component={SearchRadiology} />
        <Route path='/searchRadiologyCost' component={SearchRadiologyCost} />
        <Route path='/radiologyReport' component={RadiologyReport} />

        <Route path='/manageTransport' component={ManageTransport} />
        <Route path='/addTransport' component={AddTransport} />
        <Route path='/viewTransport' component={ViewTransport} />
        <Route path='/editTransport/:id' component={EditTransport} />
        <Route path='/searchTransport' component={SearchTransport} />
        


     </div>   
    </Router>
  );
}

export default App;

