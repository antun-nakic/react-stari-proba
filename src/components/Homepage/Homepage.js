import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";
import Header from "./Header/Header";
import Sidebar1 from "./Sidebars/Sidebar1";
import Sidebar2 from "./Sidebars/Sidebar2";
import Footer from "./Footer/Footer";
import Main from "./Main/Main";

export default class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
  }

  componentDidMount() {
    this.timer = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  tick() {
    this.setState({ date: new Date() });
  }

  render() {
    return (
      <Container>
        <Row>
          <Header sadrzaj={this.props.sadrzaj} podnaslov='Samo za hrabre' />
        </Row>
        <Row>
          <Sidebar1 />
          <Main timer={this.state.date} />
          <Sidebar2 />
        </Row>
        <Row>
          <Footer name='Antun' />
        </Row>
      </Container>
    );
  }
}
