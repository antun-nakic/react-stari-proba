import React, { Component } from "react";

export default class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      unos: "",
      rezultati: [],
      termin: "",
    };
  }

  async handleSubmit(event) {
    event.preventDefault();
    /*
    const data = await fetch(
      `https://api.tvmaze.com/search/shows?q=${this.state.unos}`
    ).then((response) => response.json());
    */
    const response = await fetch(
      `https://api.tvmaze.com/search/shows?q=${this.state.unos}`
    );
    const data = await response.json();

    this.setState({ termin: this.state.unos, unos: "", rezultati: data });
  }

  handleChange(event) {
    this.setState({ unos: event.target.value });
  }

  render() {
    return (
      <div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <label>
            Unesite ime filma:
            <input
              value={this.state.unos}
              onChange={(e) => this.handleChange(e)}></input>
          </label>
          <input type='submit' value='Pretraži filmove' />
        </form>
        {this.state.termin !== "" && (
          <div>
            <hr />
            <h3>Rezultati za termin pretrage: {this.state.termin}</h3>
          </div>
        )}

        <ul>
          {this.state.rezultati.map((element) => {
            return (
              <li key={element.show.url}>
                <a href={element.show.url}>{element.show.name}</a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
