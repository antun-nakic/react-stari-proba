import React from "react";
import { Col } from "react-bootstrap";

const Sidebar1 = (props) => {
  const numbers = [1, 2, 3, 4, 5];
  numbers.push(...props.lista);
  const listItems = numbers.map((number, index) => (
    <li key={index.toString()}>{number}</li>
  ));
  return (
    <Col md={3} style={{ backgroundColor: "coral" }}>
      <h3>Sidebar 1</h3>
      <ul>{listItems}</ul>
    </Col>
  );
};

export default Sidebar1;
