import React from "react";
import { Col } from "react-bootstrap";

const Header = (props) => {
  let { sadrzaj, podnaslov } = props;
  return (
    <Col style={{ backgroundColor: "lightblue" }}>
      <h1>{sadrzaj}</h1>
      <h2>{podnaslov}</h2>
    </Col>
  );
};

export default Header;
