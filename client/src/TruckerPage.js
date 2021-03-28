//The main trucker page

import logo from './logo.svg';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./Pages.css";

function TruckerPage() {
    return (
      <div className="Trucker">
        <div class="header">
          <h1><Link to = "/"><button>Back to Main Page</button></Link></h1>
        </div>
        <h1>Welcome to the trucker page!</h1>
        <Link to = "/MothersList"><button>Find a mother near me</button></Link>
        <br></br>
        <br></br>
        <Link to = "/Review"><button>Review your last stay</button></Link>
      </div>
    );
  }
  
  export default TruckerPage;