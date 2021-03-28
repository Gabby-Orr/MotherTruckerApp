import logo from './logo.svg';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const NotFoundPage = () => (
    <div className="404">
        <body>
            <h1>Hmmm....</h1>
            <h2>The page you are looking for does not exist.</h2>
            <Link to = "/"><button>Click here to return back to the main page</button></Link>
        </body>
    </div>
);

export default NotFoundPage;
