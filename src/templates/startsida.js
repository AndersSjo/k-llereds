import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import styled from "styled-components";
import Button from "../components/Button";
import Container from "../components/Container";

import Layout from "../components/Layout";

const Title = styled.div`
  color: rgb(250, 223, 54);
  line-height: 1;
  padding: 0.25em;
  font-size: 2.5em;
  text-shadow: 6px 3px 7px rgba(57, 57, 57, 0.9);
  font-weight: 900;
  padding: 0;
  text-align: center;

  @media screen and (max-width: 1400px) {
    font-size: 2.8vw;
  }
  @media screen and (max-width: 900px) {
    font-size: 1.5em;
  }
`;
const SubTitle = styled.div`
  color: rgb(250, 223, 54);
  line-height: 1;
  padding: 0.25em;
  text-shadow: 6px 3px 7px rgba(57, 57, 57, 0.9);
  font-size: 1.5em;
  font-weight: 800;
  text-align: center;
  padding: 0;

  @media screen and (max-width: 1400px) {
    font-size: 1.7vw;
  }
  @media screen and (max-width: 900px) {
    font-size: 1em;
  }
`;
const AbsoluteTitle = styled.div`
  position: absolute;
  z-index: 1;
  top: 100px;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;

  @media screen and (max-width: 900px) {
    top: 20px;
  }
`;

const Image = styled.div`
  background-size: cover;
  background-position: bottom;
  display: flex;
  justify-content: center;
  align-items: center;
  ${(props) =>
    props.url &&
    `
      background-image: url(${props.url});
    `}
`;

const ImageSection = styled(Image)`
  width: 33.3%;
  height: 100%;
  flex-direction: column;

  @media screen and (max-width: 900px) {
    width: 100%;
    height: 350px;
  }
`;

const CustomContainer = styled(Container)`
  height: 100vh;
  width: 100vw;
  flex-direction: row;
  @media screen and (max-width: 900px) {
    width: 100%;
    flex-direction: column;
  }
`;

export const StartpageTemplate = ({
  rubrik,
  underrubrik,
  venster,
  center,
  hoger,
}) => {
  return (
    <div>
      <AbsoluteTitle>
        <Title>{rubrik}</Title>
        <SubTitle>{underrubrik}</SubTitle>
      </AbsoluteTitle>
      <CustomContainer
        style={{
          height: "100vh",
          width: "100vw",
          flexDirection: "row",
        }}
      >
        <ImageSection
          url={
            !!venster.image.childImageSharp
              ? venster.image.childImageSharp.fluid.src
              : venster.image
          }
        >
          <Title
            style={{ textShadow: "none", width: "250px", fontSize: "2em" }}
          >
            {venster.text}
          </Title>
          <Button yellow style={{ fontWeight: "900", marginTop: "40px" }}>
            LÄS MER
          </Button>
        </ImageSection>
        <ImageSection
          url={
            !!center.image.childImageSharp
              ? center.image.childImageSharp.fluid.src
              : center.image
          }
        >
          <Title
            style={{ textShadow: "none", width: "250px", fontSize: "2em" }}
          >
            {center.text}
          </Title>
          <Button yellow style={{ fontWeight: "900", marginTop: "40px" }}>
            LÄS MER
          </Button>
        </ImageSection>
        <ImageSection
          url={
            !!hoger.image.childImageSharp
              ? hoger.image.childImageSharp.fluid.src
              : hoger.image
          }
        >
          <Title
            style={{ textShadow: "none", width: "250px", fontSize: "2em" }}
          >
            {hoger.text}
          </Title>
          <Button yellow style={{ fontWeight: "900", marginTop: "40px" }}>
            LÄS MER
          </Button>
        </ImageSection>
      </CustomContainer>
    </div>
  );
};

StartpageTemplate.propTypes = {
  rubrik: PropTypes.string,
  underrubrik: PropTypes.string,
  venster: PropTypes.object,
  center: PropTypes.object,
  hoger: PropTypes.object,
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  return (
    <Layout>
      <StartpageTemplate
        rubrik={frontmatter.rubrik}
        underrubrik={frontmatter.underrubrik}
        venster={frontmatter.venster}
        center={frontmatter.center}
        hoger={frontmatter.hoger}
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
  query StartpageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "startsida" } }) {
      frontmatter {
        rubrik
        underrubrik
        venster {
          text
          image {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        center {
          text
          image {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        hoger {
          text
          image {
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
