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

const Back = styled(CustomText)`
  position: absolute;
  left: 30px;
  top: 30px;
  @media screen and (max-width: 900px) {
    left: 0;
    top: 10px;
  }
`;

function scrollToRef(ref) {
  console.log(ref);
  console.log("clicked");
  const offsetTop = ref?.current?.offsetTop;
  console.log(ref?.current);
  console.log(offsetTop);
  window.scrollTo(0, offsetTop);
}

const isRealEstate = () => {
  if (typeof window !== `undefined`) {
    return window?.location?.pathname === "/fastigheter";
  }
  return false;
};

export default ({ refs = {}, isFastigheter = false, to = "" }) => {
  const { aboutRef, historyRef, contactRef } = refs;
  return (
    <Container
      row
      grey
      style={{
        justifyContent: "center",
        textAlign: "center",
        padding: "15px",
      }}
    >
      {aboutRef ? (
        <Container row style={{ justifyContent: "center", width: "20%" }}>
          <CustomText white onClick={() => scrollToRef(aboutRef)}>
            OM OSS
          </CustomText>
          <CustomText white onClick={() => scrollToRef(historyRef)}>
            VÅR HISTORIA
          </CustomText>
        </Container>
      ) : (
        <Back>
          <Link style={{ color: "white" }} to={`/${to}`}>
            {"<- Tillbaka"}
          </Link>
        </Back>
      )}
      <Link style={{ cursor: "pointer" }} to="/">
        <Title style={{ fontSize: "2.2em" }}>GEDIGET HANTVERK</Title>
        <Title style={{ fontSize: "1.5em", fontWeight: "700" }}>
          - SEDAN 1983
        </Title>
      </Link>
      {aboutRef && (
        <Container row style={{ justifyContent: "center", width: "20%" }}>
          {isRealEstate() && (
            <CustomText white>
              <Link style={{ color: "white" }} to="/objekt">
                VÅRA FASTIGHETER
              </Link>
            </CustomText>
          )}
          <CustomText white onClick={() => scrollToRef(contactRef)}>
            KONTAKT
          </CustomText>
        </Container>
      )}
    </Container>
  );
};
