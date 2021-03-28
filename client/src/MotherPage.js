//The main mother page


import logo from './logo.svg';
import HostInterface from './hostInterface.php'
import './MotherPage.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./Pages.css";

function MotherPage() {
  return (
    
    <div className="Mother">
                  <div class="header">
                <h1><Link to = "/"><button>Back to Main Page</button></Link></h1>
            </div>
      <h1>Welcome to the mother page!</h1>
      <Link to = "/NewMother"><button>New Mother Set-Up</button></Link>
      <br></br>
      <br></br>
      <Link to = "/MotherUpdate"><button>Update Your Mother Page</button></Link>
    </div>
  );
}


export default MotherPage;
