//The main admin page

import logo from './logo.svg';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./Pages.css";


function AdminPage() {
    return (
      <div className="Admin">

        <div className="header">
            <h1><Link to = "/"><button>Back to Main Page</button></Link></h1>
        </div>
        <div className =  "MainArea">
          <h2>Welcome to the admin page!</h2>
        </div>
      </div>
    );
  }
  
  export default AdminPage;