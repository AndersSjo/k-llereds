import React from "react";
import styled from "styled-components";
import { StaticQuery, Link } from "gatsby";

import Container from "./Container";
import Text from "./Text";
import Title from "./Title";

const CustomText = styled(Text)`
  font-size: 1em;
  font-weight: 600;
  margin: auto 15px;
  text-align: center;
`;

const Header = class extends React.Component {
  render() {
    return (
      <Container
        row
        grey
        style={{
          justifyContent: "space-between",
          textAlign: "center",
          padding: "15px",
        }}
      >
        <Container row style={{ justifyContent: "center" }}>
          <CustomText white>OM OSS</CustomText>
          <CustomText white>VÅR HISTORIA</CustomText>
        </Container>
        <Container>
          <Title style={{ fontSize: "2.2em" }}>GEDIGET HANTVERK</Title>
          <Title style={{ fontSize: "1.5em", fontWeight: "700" }}>
            - SEDAN 1983
          </Title>
        </Container>
        <Container row>
          <CustomText white>VÅRA FASTIGHETER</CustomText>
          <CustomText white>KONTAKT</CustomText>
        </Container>
      </Container>
    );
  }
};

export default Header;
