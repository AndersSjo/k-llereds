import styled from "styled-components";

export default styled.div`
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
