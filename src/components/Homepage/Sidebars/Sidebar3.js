import React, { Component } from "react";
import { Col } from "react-bootstrap";

export default class Sidebar3 extends Component {
  constructor(props) {
    super(props);
    this.state = { names: [], value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    this.setState({
      names: [...this.state.names, document.getElementsByName("inp")[0].value],
      value: event.target.value,
    });
    alert("A name was submitted: " + this.state.value + this.state.names);
    event.preventDefault();
  }

  render() {
    return (
      <Col md={3} className='bg-warning'>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              name='inp'
              type='text'
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <input type='submit' value='Submit' />
        </form>
      </Col>
    );
  }
}
