import React from "react";
import { Col } from "react-bootstrap";

const Main = ({ timer }) => {
  return <Col md={6}>Trenutno vrijeme je {timer.toLocaleTimeString()}</Col>;
};

export default Main;
