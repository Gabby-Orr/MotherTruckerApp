import { render } from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import React, { Component } from 'react'
import "./Pages.css";
import MotherDisplayPage from './MotherDisplayPage'
import HardCodeDisplayPage from './HardCodeDisplayPage'

const newMother = async values => {
  const res = await fetch({ url: "/api", method: "POST", body: values });
  const data = await res.json();
  return data;
};

// function NewMotherPage() {
//     return (
//       <div className="MotherUpdate">
{/* <div class="header">
<h1><Link to = "/mother"><button>Back to Mother Page</button></Link></h1>
</div> */}
//         <h1>Welcome to the new mother page!</h1>
//       </div>
//     );
//   }
  
//   export default NewMotherPage;


class NewMotherPage extends Component {
    state = {
        title: "",
        location: "",
        phone: "",
        message: ""
    };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  nextComponent = () =>{
    <MotherDisplayPage title = {this.title} location = {this.location} phone = {this.phone} message = {this.message}/>
  };
  handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = '/YourMotherDisplay';
  }
  render() {
    return (
        
        <form onSubmit={this.handleSubmit}>
        <div class="header">
            <h1><Link to = "/mother"><button>Back to Mother Page</button></Link></h1>
        </div>
        <h2>Please Enter Your Information</h2>
        <hr />
        <Form.Group controlId="formTitle">
          <Form.Label>Name of Business</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter business name"
            onChange={this.handleChange}
          />
          {/* <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text> */}
        </Form.Group>

        <Form.Group controlId="formLocation">
          <Form.Label>Location</Form.Label>
          <Form.Control
            type="location"
            placeholder="Location"
            onChange={this.handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formPhone">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            type="phone"
            placeholder="Phone"
            onChange={this.handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formMessage">
          <Form.Label>Message for truckers (amenities, hours, etc)</Form.Label>
          <Form.Control
            type="message"
            placeholder="Message"
            onChange={this.handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formTruckerFriendly">
          <Form.Check type="checkbox" label="Trucker Friendly" />
        </Form.Group>

        <input type="submit" value="Submit" />
        {/* <Button
          variant="primary"
          type="button"
           onClick={this.nextComponent}>{() => newMother(this.state)}
          Submit
        </Button> */}
      </form>
    );
  }
}

export default NewMotherPage;