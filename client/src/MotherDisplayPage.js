import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./Pages.css";
import React from 'react';
import "./Pages.css";


const MotherDisplayPage = (props) => {
    return(
        <div className="MotherDisplayPage" style={{ justifyContent: "center" }}>
            <div class="header">
                <h1><Link to = "/"><button>Back to Main Page</button></Link></h1>
            </div>
            <div className="MotherDisplay"> </div>
            <div style={noteRootStyle}>
              <h3>{props.title}</h3>
              <p>{props.location}</p>
              <p>{props.phone}</p>
              <p>{props.message}</p>
            </div>

        </div>
    );
}
const noteRootStyle = {
    border: "2px #0af solid",
    borderRadius: 9,
    margin: 20,
    backgroundColor: "#efefef",
    padding: 6
};

function Info(props){
    const data = [{title: props.title, location: props.location, phone: props.phone, message: props.message }]

    const noteRootStyle = {
        border: "2px #0af solid",
        borderRadius: 9,
        margin: 20,
        backgroundColor: "#efefef",
        padding: 6
      };

    return (
        <div style={{ width: 400 }}>
            <br></br>
            <br></br>
            <br></br>
          {data.map(ele => 
            <div style={noteRootStyle}>
              <h3>{ele.title}</h3>
              <p>{ele.location}</p>
              <p>{ele.phone}</p>
              <p>{ele.message}</p>
            </div>
          )}
        </div>
      )
    }


export default MotherDisplayPage;
