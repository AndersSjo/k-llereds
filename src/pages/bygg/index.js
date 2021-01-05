import React from "react";
import PropTypes from "prop-types";
import ContentPage from "../../modules/content-page";

import Layout from "../../components/Layout";

ContentPage.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  historia: PropTypes.object,
};

const ByggPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  console.log("data", frontmatter.historia);
  return (
    <Layout>
      <ContentPage
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

ByggPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default ByggPage;

export const pageQuery = graphql`
  query Bygg {
    markdownRemark(frontmatter: { templateKey: { eq: "bygg" } }) {
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
        kontakt {
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
        personer {
          rubrik
          text {
            stycke
          }
          bild {
            namn
            titel
            telefon
            fax
            mail
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
  }
`;
