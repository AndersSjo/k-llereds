import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import styled from "styled-components";
import Button from "../components/Button";
import Image from "../components/Image";
import Title from "../components/Title";
import Container from "../components/Container";

import Layout from "../components/Layout";

const SubTitle = styled(Title)`
  font-size: 1.5em;
  font-weight: 800;

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
    height: 100%;
    width: 100%;
    flex-direction: column;
  }
`;

const CustomTitle = styled(Title)`
  text-shadow: none;
  width: 250px;
  @media screen and (max-width: 1050px) {
    flex-direction: column;
    width: 160px;
  }
`;

const CustomButton = styled(Button)`
  font-weight: 900;
  margin-top: 40px;
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
      <CustomContainer>
        <ImageSection
          url={
            !!venster.image.childImageSharp
              ? venster.image.childImageSharp.fluid.src
              : venster.image
          }
        >
          <CustomTitle>{venster.text}</CustomTitle>
          <CustomButton yellow>LÄS MER</CustomButton>
        </ImageSection>
        <ImageSection
          url={
            !!center.image.childImageSharp
              ? center.image.childImageSharp.fluid.src
              : center.image
          }
        >
          <CustomTitle>{center.text}</CustomTitle>
          <CustomButton yellow>LÄS MER</CustomButton>
        </ImageSection>
        <ImageSection
          url={
            !!hoger.image.childImageSharp
              ? hoger.image.childImageSharp.fluid.src
              : hoger.image
          }
        >
          <CustomTitle>{hoger.text}</CustomTitle>
          <CustomButton yellow>LÄS MER</CustomButton>
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
