import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import styled from "styled-components";

import Layout from "../components/Layout";

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

export const IndexPageTemplate3 = ({ image, title, subheading, mainpitch }) => (
  <div>
    <SplashImage
      url={!!image.childImageSharp ? image.childImageSharp.fluid.src : image}
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
        <SplashSubTitle>{subheading}</SplashSubTitle>
      </div>
    </SplashImage>
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <div className="content">
                  <div className="tile">
                    <Title className="title">{mainpitch.title}</Title>
                  </div>
                  {mainpitch.beskrivning.map((stycke, i) => {
                    return (
                      <div className="tile" key={`${i}-desc`}>
                        <Paragraph center>{stycke.stycke}</Paragraph>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

IndexPageTemplate3.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  historia: PropTypes.object,
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  return (
    <Layout>
      <IndexPageTemplate3
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
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
  query IndexPageTemplate3 {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          beskrivning {
            stycke
          }
          title
          description
        }
        historia {
          rubrik
          text {
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
