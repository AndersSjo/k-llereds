import React from "react";
import axios from "axios";
import Container from "../components/Container";
import Text from "../components/Text";
import Paragraphs from "../components/Paragraphs";
import Image from "../components/Image";
import styled from "styled-components";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      password: "",
    };
  }

  onClick = () => {
    console.log("clicked");
    this.setState({ clicked: true });
  };

  handleChange = (event) => {
    this.setState({ password: event.target.value });
  };

  handleSubmit = (event) => {
    axios
      .get(`/.netlify/functions/hello?password=${this.state.password}`)
      .then(({ data }) => {
        console.log(data);
        if (data.url && typeof window !== undefined)
          window.location.assign(`/${data.url}`);
      });
    event.preventDefault();
  };

  render() {
    const { style } = this.props;
    return (
      <div style={style} onClick={this.onClick}>
        {this.state.clicked ? (
          <form onSubmit={this.handleSubmit}>
            <label>
              Lösenord:
              <input
                type="password"
                value={this.state.password}
                onChange={this.handleChange}
              ></input>
            </label>
            <input type="submit" value="Submit" />
          </form>
        ) : (
          "Logga in"
        )}
      </div>
    );
  }
}

export default Login;
