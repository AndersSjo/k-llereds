import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import Header from "../components/Header";
import Container from "../components/Container";
import Footer from "../components/Footer";

export const Files = ({ files }) => {
  console.log("FILES", files);
  return (
    <Container>
      {files.map(({ file }) => {
        const fileSplit = file.split("/");
        const fileName = fileSplit[fileSplit.length - 1];
        return (
          <a href={file} download target="_blank">
            {fileName}
          </a>
        );
      })}
    </Container>
  );
};
Files.propTypes = {
  files: PropTypes.array,
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  return (
    <Layout>
      <Header />
      <Files files={frontmatter.files} />
      <div style={{ marginTop: "30px", minHeight: "50vh" }} />
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
    markdownRemark(frontmatter: { templateKey: { eq: "files" } }) {
      frontmatter {
        files {
          file
        }
      }
    }
  }
`;
