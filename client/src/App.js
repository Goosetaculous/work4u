import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import {Navbar, NavItem, Row, Col, Input, Carousel} from "react-materialize";

class App extends Component {

  state = {users: []};

  componentDidMount() {
    fetch("/123").then(res => res.json()).then(users => this.setState({users}));
  }

  render() {
    console.log("Rendering");
    console.log(`this.state = ${this.state.user}`);
    return (
      <div className="App">
        <Row>
          <Col m={6}>A</Col>
          <Col m={6}>B</Col>
        </Row>
        <h1>Users</h1>
        {this.state.users.map(user => 
          <div key={user.id}>{user.name}</div>
        )}
      </div>
    );
  }
}

export default App;
