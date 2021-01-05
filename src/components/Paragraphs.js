import React from "react";
import styled from "styled-components";

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

const Paragraphs = ({paragraphs, textStyle}) => (
  paragraphs.map((stycke, i) => {
    return (
        <Paragraph key={i} center style={textStyle}>{stycke.stycke}</Paragraph>
    );
  })
)

export default Paragraphs

