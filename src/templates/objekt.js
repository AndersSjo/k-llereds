import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import styled from "styled-components";

import Layout from "../components/Layout";
import Features from "../components/Features";
import Header from "../components/Header";
import Container from "../components/Container";

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
const SplashSubTitle = styled.div`
  color: white;
  line-height: 1;
  padding: 0.25em;
  font-size: 4em;
  font-weight: 400;
  text-align: center;
  padding: 0;

  @media screen and (max-width: 1200px) {
    font-size: 5.3vw;
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

const Title = styled.div`
  font-size: 3.3em;
  text-align: center;
  font-weight: 900;
  color: rgb(30, 79, 86);
  width: 100%;

  @media screen and (max-width: 1200px) {
    font-size: 4.4vw;
  }
`;

const Paragraph = styled.div`
  padding-top: 40px;
  font-size: 1.5em;
  font-weight: 600;
  color: rgb(30, 79, 86);
  width: 100%;
  ${(props) =>
    props.center &&
    `
      text-align: center;
    `}
  ${(props) =>
    props.white &&
    `
      color: white;
    `}

  @media screen and (max-width: 900px) {
    font-size: 1em;
  }
`;

export const Objects = ({
  title,
  description,
  fastigheter,
}) => (
  <Container>
    <SplashTitle>{title}</SplashTitle>
  </Container>
        
);

Objects.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  fastigheter: PropTypes.array,
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  return (
    <Layout>
      <Header />
      <Objects
        title={frontmatter.title}
        description={frontmatter.description}
        fastigheter={frontmatter.fastigheter}
      />
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
