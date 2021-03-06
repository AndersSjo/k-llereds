import React from "react";
import { navigate } from "gatsby-link";
import Layout from "../components/Layout";
import Container from "../components/Container";
import Text from "../components/Text";
import Button from "../components/Button";
import Paragraphs from "../components/Paragraphs";
import Image from "../components/Image";
import styled from "styled-components";

const InputTextField = styled.input`
  box-shadow: inset 0 0.0625em 0.125em rgba(43, 37, 35, 0.05);
  max-width: 100%;
  width: 100%;
  height: 60px;
  background-color: rgb(211, 218, 224);
  border-color: white;
  border-radius: 4px;
  color: #363636;
`;

const InputTextArea = styled.textarea`
  box-shadow: inset 0 0.0625em 0.125em rgba(43, 37, 35, 0.05);
  max-width: 100%;
  width: 100%;
  height: 250px;
  background-color: rgb(211, 218, 224);
  border-color: white;
  border-radius: 4px;
  color: #363636;
`;

const CustomImage = styled(Image)`
  @media screen and (max-width: 900px) {
    display: none;
  }
`;

const CustomContainer = styled(Container)`
  padding: 70px;

  @media screen and (max-width: 900px) {
    padding: 0;
  }
`;

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isValidated: false };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch((error) => alert(error));
  };

  render() {
    return (
      <Layout>
        <CustomContainer row>
          <CustomImage
            style={{
              width: "35%",
            }}
            url={
              !!this.props.contact.bild.childImageSharp
                ? this.props.contact.bild.childImageSharp.fluid.src
                : this.props.contact.bild
            }
          >
            imgage
          </CustomImage>
          <div
            className="content"
            style={{
              backgroundColor: "rgb(175, 187, 198)",
              padding: "120px 5%",
            }}
          >
            <Text white bold header>
              {this.props.contact.rubrik}
            </Text>
            <Paragraphs
              paragraphs={this.props.contact.text}
              textStyle={{
                color: "white",
                textAlign: "left",
                fontWeight: "600",
                lineHeight: "30px",
                letterSpacing: "1.5px",
              }}
            />
            <form
              name={this.props.formName}
              method="post"
              // action="/contact/thanks/"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={this.handleSubmit}
              style={{ marginTop: "40px" }}
            >
              {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
              <input type="hidden" name="form-name" value="contact" />
              <div hidden>
                <label>
                  Don’t fill this out:{" "}
                  <input name="bot-field" onChange={this.handleChange} />
                </label>
              </div>
              <Container row spaceBetween>
                <div className="field" style={{ width: "46%" }}>
                  <label className="label" htmlFor={"name"}>
                    <Text white semiBold>
                      Namn
                    </Text>
                  </label>
                  <InputTextField
                    className="input"
                    type={"text"}
                    name={"name"}
                    onChange={this.handleChange}
                    id={"name"}
                    required={true}
                  />
                </div>
                <div className="field" style={{ width: "50%" }}>
                  <label className="label" htmlFor={"phone"}>
                    <Text white semiBold>
                      Telefon
                    </Text>
                  </label>
                  <div className="control">
                    <InputTextField
                      className="input"
                      type={"text"}
                      name={"phone"}
                      onChange={this.handleChange}
                      id={"phone"}
                      required={true}
                    />
                  </div>
                </div>
              </Container>
              <div className="field">
                <label className="label" htmlFor={"email"}>
                  <Text white semiBold>
                    E-post
                  </Text>
                </label>
                <div className="control">
                  <InputTextField
                    className="input"
                    type={"email"}
                    name={"email"}
                    onChange={this.handleChange}
                    id={"email"}
                    required={true}
                  />
                </div>
              </div>
              <div className="field">
                <label className="label" htmlFor={"message"}>
                  <Text white semiBold>
                    Meddelande
                  </Text>
                </label>
                <div className="control">
                  <InputTextArea
                    className="textarea"
                    name={"message"}
                    onChange={this.handleChange}
                    id={"message"}
                    required={true}
                  />
                </div>
              </div>
              <Button type="submit" style={{ marginTop: "30px" }}>
                <Text gray bold sub>
                  Skicka
                </Text>
              </Button>
            </form>
          </div>
        </CustomContainer>
      </Layout>
    );
  }
}
