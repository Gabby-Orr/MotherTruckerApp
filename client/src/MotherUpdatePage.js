import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./Pages.css";


function MotherUpdatePage() {
    return (
        
      <div className="MotherUpdate">
            <div class="header">
                <h1><Link to = "/mother"><button>Back to Mother Page</button></Link></h1>
            </div>
        <h1>Welcome to the mother update page!</h1>
      </div>
    );
  }
  
  export default MotherUpdatePage;