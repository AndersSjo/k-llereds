import styled from "styled-components";

export default styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin: 0 auto;
  position: relative;
  width: auto;
  ${(props) =>
    props.spaceBetween &&
    `
      justify-content: space-between;
    `}
  ${(props) =>
    props.row &&
    `
      flex-direction: row;
    `}
  ${(props) =>
    props.grey &&
    `
      color: white;
      background-color: rgb(30, 79, 86); 
    `}

  @media screen and (max-width: 900px) {
    ${(props) =>
      props.row &&
      `
      flex-direction: column;
    `}
  }
`;
