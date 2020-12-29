import styled from "styled-components";

export default styled.div`
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
