import React from "react";
import { Col } from "react-bootstrap";
import Podmain from "./Podmain";
import Movies from "./Movies/Movies";

const Main = ({ timer, ff }) => {
  return (
    <Col md={6} className='bg-light'>
      <Movies />
      <hr />
      Brojač: {timer}
      <Podmain {...{ ff }} />
    </Col>
  );
};

export default Main;
