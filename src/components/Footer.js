import React from "react";
import { StaticQuery } from "gatsby";

import Paragraphs from "./Paragraphs";
import Container from "./Container";

const Footer = class extends React.Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          query FooterQuery {
            markdownRemark(frontmatter: { templateKey: { eq: "footer" } }) {
              frontmatter {
                ven {
                  stycke
                }
                hog {
                  stycke
                }
              }
            }
          }
        `}
        render={(data) => {
          const { hog, ven } = data.markdownRemark.frontmatter;
          console.log("DATA", hog, ven);
          return (
            <Container row grey style={{ padding: "150px 0 200px 0" }}>
              <Container>
                <Paragraphs
                  paragraphs={ven}
                  textStyle={{
                    color: "white",
                    paddingTop: "5px",
                    minHeight: "40px",
                  }}
                />
              </Container>
              <Container>
                <Paragraphs
                  paragraphs={hog}
                  textStyle={{
                    color: "white",
                    paddingTop: "5px",
                    minHeight: "40px",
                  }}
                />
              </Container>
            </Container>
          );
        }}
      />
    );
  }
};

export default Footer;
