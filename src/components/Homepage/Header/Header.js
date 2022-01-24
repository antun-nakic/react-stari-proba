import React from "react";
import { Col } from "react-bootstrap";

const Header = ({ sadrzaj, podnaslov }) => {
  return (
    <Col>
      <h1>{sadrzaj}</h1>
      <h2>{podnaslov}</h2>
    </Col>
  );
};

export default Header;
