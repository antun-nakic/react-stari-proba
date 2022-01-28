import React from "react";
import { Col } from "react-bootstrap";

const Sidebar2 = (props) => {
  return (
    <Col md={3} className='bg-warning'>
      <form onSubmit={props.handleSubmit}>
        <label>
          Name:
          <input
            type='text'
            id='unos'
            value={props.value}
            onChange={props.handleChange}
          />
        </label>
        <input type='submit' value='Dodaj' />
      </form>
      <hr />
    </Col>
  );
};

export default Sidebar2;
