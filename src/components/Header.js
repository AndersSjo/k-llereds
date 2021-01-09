import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import Container from "./Container";
import Text from "./Text";
import Title from "./Title";

const CustomText = styled(Text)`
  font-size: 1em;
  font-weight: 600;
  margin: auto 15px;
  text-align: center;
  cursor: pointer;
`;

function scrollToRef(ref) {
  console.log(ref);
  console.log("clicked");
  const offsetTop = ref?.current?.offsetTop;
  console.log(ref?.current);
  console.log(offsetTop);
  window.scrollTo(0, offsetTop);
}

export default ({ refs, isFastigheter = false }) => {
  const { aboutRef, historyRef, contactRef } = refs;
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
        <CustomText white onClick={() => scrollToRef(aboutRef)}>
          OM OSS
        </CustomText>
        <CustomText white onClick={() => scrollToRef(historyRef)}>
          VÅR HISTORIA
        </CustomText>
      </Container>
      <Link style={{ cursor: "pointer" }} to="/">
        <Title style={{ fontSize: "2.2em" }}>GEDIGET HANTVERK</Title>
        <Title style={{ fontSize: "1.5em", fontWeight: "700" }}>
          - SEDAN 1983
        </Title>
      </Link>
      <Container row style={{ justifyContent: "center" }}>
        {window.location.pathname === "/fastigheter" && (
          <CustomText white>VÅRA FASTIGHETER</CustomText>
        )}
        <CustomText white onClick={() => scrollToRef(contactRef)}>
          KONTAKT
        </CustomText>
      </Container>
    </Container>
  );
};
