import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MySplashPage from './MySplashPage';
import MotherPage from './MotherPage';
import TruckerPage from './TruckerPage';
import AdminPage from './AdminPage';
import NotFound from './NotFoundPage';
import MothersListPage from './MothersListPage'
import NewMotherPage from './NewMotherPage'
import MotherUpdatePage from './MotherUpdatePage'
import MotherDisplayPage from './MotherDisplayPage'
import HardCodeDisplayPage from './HardCodeDisplayPage'


import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


//This is the main page that handles navigation between the splash page, the mother page, and the trucker page
//Note: may need to run "npm i react-router-dom --save" if error when trying to access "react-router-dom" import

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <Router>
    <div className = "mainPage">
      <Switch>
       <Route path = "/" exact component={MySplashPage}/>
       <Route path = "/mother" component={MotherPage}/>
       <Route path = "/trucker" component = {TruckerPage}/>
       <Route path = "/admin" component = {AdminPage}/>
       <Route path = "/MothersList" component = {MothersListPage}/>
       <Route path = "/NewMother" component = {NewMotherPage}/>
       <Route path = "/MotherUpdate" component = {MotherUpdatePage}/>
       <Route path = "/MotherDisplay" component = {MotherDisplayPage}/>
       <Route path = "/YourMotherDisplay" component = {HardCodeDisplayPage}/>
       <Route path = "*" component = {NotFound}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;