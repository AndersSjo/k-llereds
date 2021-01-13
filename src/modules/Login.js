import React from "react";
import axios from "axios";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      password: "",
      failedPassword: false,
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
        console.log(data.url && typeof window !== undefined);
        if (data.url && typeof window !== undefined)
          window.location.assign(`/${data.url}`);
        else {
          console.log("wrong");
          this.setState({ failedPassword: true });
        }
      });
    event.preventDefault();
  };

  render() {
    const { style } = this.props;
    return (
      <div style={style} onClick={this.onClick}>
        {this.state.clicked ? (
          <div>
            {this.state.failedPassword && (
              <div style={{ color: "red" }}>Fel lösenord angivet.</div>
            )}
            <form onSubmit={this.handleSubmit}>
              <label>
                Lösenord:
                <input
                  style={{ marginLeft: "5px" }}
                  type="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                ></input>
              </label>
              <input type="submit" value="OK" style={{ marginLeft: "5px" }} />
            </form>
          </div>
        ) : (
          "Logga in"
        )}
      </div>
    );
  }
}

export default Login;
