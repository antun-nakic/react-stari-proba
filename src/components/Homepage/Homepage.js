import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";
import Header from "./Header/Header";
import Sidebar1 from "./Sidebars/Sidebar1";
import Sidebar2 from "./Sidebars/Sidebar2";
import Sidebar3 from "./Sidebars/Sidebar3";
import Footer from "./Footer/Footer";
import Main from "./Main/Main";

export default class Homepage extends Component {
  constructor(props) {
    super(props);
    this.sime = props.sadrzaj;
    this.state = {
      date: 0,
      lista: [],
      value: "",
    };
  }

  componentDidMount() {
    this.timer = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  tick() {
    this.setState({ date: this.state.date + 1 });
  }

  restirajTimer(broj) {
    this.setState({ date: broj });
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    let aa = [...this.state.lista, document.getElementById("unos").value];
    this.setState({
      lista: aa,
      value: "",
    });
  }

  render() {
    return (
      <Container>
        <Row style={{ height: "15vh" }}>
          <Header sadrzaj={this.sime} podnaslov='Samo za hrabre' />
        </Row>
        <Row style={{ height: "70vh" }}>
          <Sidebar1 lista={this.state.lista} />
          <Main ff={() => this.restirajTimer(8)} timer={this.state.date} />
          <Sidebar2
            value={this.state.value}
            handleChange={(e) => this.handleChange(e)}
            handleSubmit={(e) => this.handleSubmit(e)}
          />
        </Row>
        <Row style={{ height: "15vh" }} className='bg-info'>
          <Footer name='Antun' />
        </Row>
      </Container>
    );
  }
}
