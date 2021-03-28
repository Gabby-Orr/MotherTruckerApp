import logo from './logo.svg';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./Pages.css";

const NotFoundPage = () => (
    <div className="404">
        <div class="header">
            <h1><Link to = "/"><button>Back to Main Page</button></Link></h1>
        </div>
        <body>
            <h1>Hmmm....</h1>
            <h2>The page you are looking for does not exist.</h2>
        </body>
    </div>
);

export default NotFoundPage;
