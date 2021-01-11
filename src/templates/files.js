import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
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
  maxWidth: 1200px;
  justifyContent: center;
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

export const Files = ({
  files
}) => {
  console.log('FILES', files)
  return (
  <Container>
    {files.map(({file}) => {
      return (
        <a href={file} download>{file}</a>
      )
    })}
  </Container>
        
);
}
Files.propTypes = {
  files: PropTypes.array,
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  return (
    <Layout>
      <Header />
      <Files
        files={frontmatter.files}
      />
      <div style={{marginTop: "30px"}} />
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
  query FileQuery {
    markdownRemark(frontmatter: {templateKey: {eq: "files"}}) {
      frontmatter {
        files {
          file 
        }
      }
    }
  }
`;
