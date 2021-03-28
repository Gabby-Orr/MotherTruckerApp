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

        <div className = "form">
        <h2>Please Enter Your Information</h2>
        <hr />
        <br/>
          {//Work in progress:
           // Reformat table to right justify lables and left justify textboxes
          }
          <table>

            <tr>
            <Form.Group controlId="formTitle">
              <td><Form.Label>Name of Business</Form.Label></td>
              <td>
                <Form.Control
                  type="text"
                  placeholder="Enter business name"
                  onChange={this.handleChange}
                />
              </td>
            </Form.Group>
            </tr>

            <tr>
            <Form.Group controlId="formLocation">
              <td><Form.Label>Location</Form.Label></td>
              <td>
                <Form.Control
                  type="location"
                  placeholder="Location"
                  onChange={this.handleChange}
                />
              </td>
            </Form.Group>
            </tr>

            <tr>
              <Form.Group controlId="formPhone">
                <td><Form.Label>Phone</Form.Label></td>
                <td><Form.Control
                    type="phone"
                    placeholder="Phone"
                    onChange={this.handleChange}
                  />
                </td>
              </Form.Group>
            </tr>

            <tr>
            <Form.Group controlId="formMessage">
              <td><Form.Label>Message for truckers (amenities, hours, etc)</Form.Label></td>
              <td><Form.Control
                type="message"
                placeholder="Message"
                onChange={this.handleChange}
              />
              </td>
            </Form.Group>
            </tr>


            <tr>
            <Form.Group controlId="formTruckerFriendly">
              <td id="left">Trucker Friendly?</td>
              <td><Form.Check type="checkbox" label="" /></td>
            </Form.Group>
            </tr>

            <tr><td><input type="submit" value="Submit" /></td></tr>
          </table>
        </div>
      </form>
    );
  }
}

export default NewMotherPage;