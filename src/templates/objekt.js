import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import styled from "styled-components";

import Layout from "../components/Layout";
import Text from "../components/Text";
import Header from "../components/Header";
import Container from "../components/Container";
import Image from "../components/Image";
import Paragraphs from "../components/Paragraphs";
import Footer from "../components/Footer";

const SplashTitle = styled.div`
  color: white;
  line-height: 1;
  padding: 0.25em;
  font-size: 7em;
  text-shadow: 6px 3px 7px rgba(57, 57, 57, 0.7);
  font-weight: 700;
  padding: 0;

  @media screen and (max-width: 1200px) {
    font-size: 9.3vw;
  }
`;
const CustomContainer = styled(Container)`
  height: 550px;
  width: 100%;
  flex-direction: row;
  padding: 30px 60px 0 60px;
  maxwidth: 1200px;
  justifycontent: center;
  :nth-of-type(odd) {
    flex-direction: row-reverse;

    @media screen and (max-width: 900px) {
      flex-direction: column-reverse;
    }
  }
  @media screen and (max-width: 900px) {
    flex-direction: column-reverse;
    height: 100%;
    padding: 30px 20px 0 20px;
  }
`;
const SplashImage = styled.div`
  width: 100vw;
  height: 75vh;
  background-size: cover;
  background-position: bottom;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0 !important;
  backgroundposition: top left;
  backgroundattachment: fixed;
  ${(props) =>
    `
      background-image: url(${props.url});
    `}
`;

const ApartmentInformation = styled(Container)`
  height: 100%;
  width: 50%;

  @media screen and (max-width: 900px) {
    width: 100%;
    padding-bottom: 30px;
  }
`;

const ApartmentImage = styled(Image)`
  height: 100%;
  width: 50%;

  @media screen and (max-width: 900px) {
    height: 400px;
    width: 100%;
    padding-bottom: 30px;
  }
`;

export const Objects = ({ title, bild, description, fastigheter }) => (
  <Container>
    <SplashImage
      url={!!bild.childImageSharp ? bild.childImageSharp.fluid.src : bild}
    >
      <div
        style={{
          display: "flex",
          height: "150px",
          lineHeight: "1",
          justifyContent: "space-around",
          alignItems: "left",
          flexDirection: "column",
        }}
      >
        <SplashTitle>{title}</SplashTitle>
      </div>
    </SplashImage>
    {fastigheter.map((apartment, i) => {
      return (
        <CustomContainer>
          <ApartmentInformation grey>
            <Text
              style={{
                fontSize: "2em",
                textAlign: "center",
                marginTop: "20px",
              }}
            >
              {apartment.adress}
            </Text>
            <Container style={{ padding: "0 30px" }}>
              <Paragraphs
                paragraphs={apartment.beskrivning}
                textStyle={{
                  color: "white",
                  fontSize: "1em",
                  fontWeight: "400",
                  paddingTop: "12px",
                  textAlign: "left",
                }}
              />
            </Container>
          </ApartmentInformation>
          <ApartmentImage
            url={
              !!apartment.bild.childImageSharp
                ? apartment.bild.childImageSharp.fluid.src
                : apartment.bild
            }
          />
        </CustomContainer>
      );
    })}
  </Container>
);

Objects.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  bild: PropTypes.object,
  fastigheter: PropTypes.array,
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  return (
    <Layout>
      <Header to="fastigheter" />
      <Objects
        title={frontmatter.title}
        bild={frontmatter.bild}
        description={frontmatter.description}
        fastigheter={frontmatter.fastigheter}
      />
      <div style={{ marginTop: "30px" }} />
      <Footer />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query objectQuery {
    markdownRemark(frontmatter: { templateKey: { eq: "objekt" } }) {
      frontmatter {
        title
        description
        bild {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        fastigheter {
          adress
          beskrivning {
            stycke
          }
          bild {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`;
