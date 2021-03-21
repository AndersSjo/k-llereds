import React from "react";
import Container from "../components/Container";
import Text from "../components/Text";
import Paragraphs from "../components/Paragraphs";
import Image from "../components/Image";
import styled from "styled-components";

const Title = styled.div`
  font-size: 3.3em;
  text-align: center;
  font-weight: 900;
  color: rgb(30, 79, 86);
  width: 100%;

  @media screen and (max-width: 1200px) {
    font-size: 4.4vw;
  }
  ${(props) =>
    props.white &&
    `
      color: white;
    `}
`;

const PersonContainer = styled(Container)`
  margin: 10px;
  max-width: 300px;
  @media screen and (max-width: 900px) {
    font-size: 1em;
  }
`;

const CustomContainer = styled(Container)`
  margin: 70px 70px 0px 70px;
  padding: 50px 0 100px 0;
  @media screen and (max-width: 900px) {
    margin: 0;
  }
`;

const Person = ({ person }) => {
  return (
    <PersonContainer>
      <Image
        url={
          !!person.bild.childImageSharp
            ? person.bild.childImageSharp.fluid.src
            : person.bild
        }
        style={{ width: "100%", height: "280px" }}
      />
      <Text>
        <b>{person.namn}</b>
      </Text>
      <Text>
        <b>{person.titel}</b>
      </Text>
      <Text>{person.telefon}</Text>
      <Text>{person.fax}</Text>
      <Text>{person.mail}</Text>
    </PersonContainer>
  );
};

export default ({ persons }) => {
  return (
    <CustomContainer light>
      <Title white>{persons.rubrik}</Title>
      <Paragraphs paragraphs={persons.text} textStyle={{ color: "white" }} />
      <Container row wrap center>
        {persons.bild.map((person, i) => {
          return <Person key={i} person={person} />;
        })}
      </Container>
    </CustomContainer>
  );
};
