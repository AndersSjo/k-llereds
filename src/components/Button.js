import styled from "styled-components";

export default styled.button`
  background-color: rgb(32, 37, 43);
  border-radius: 30px;
  border-width: 0px;
  cursor: pointer;
  justify-content: center;
  text-align: center;
  padding: 15px 40px;
  ${(props) =>
    props.yellow &&
    `
      background-color: rgb(250, 223, 54);
      color: rgb(35, 31, 32);
    `}
`;
