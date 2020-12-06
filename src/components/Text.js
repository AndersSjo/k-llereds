import styled from 'styled-components';

export default styled.div`
  font-size: 1.2em;
  font-weight: 400;
  ${(props) =>
    props.header &&
    `
      font-size: 3.5em;
    `}
  ${(props) =>
    props.sub &&
    `
      font-size: 1.5em;
    `}
  ${(props) =>
    props.white &&
    `
      color: white;
    `}
  ${(props) =>
    props.gray &&
    `
      color: rgb(175, 187, 198);
    `}
  ${(props) =>
    props.bold &&
    `
      font-weight: 700;
    `}
  ${(props) =>
    props.semiBold &&
    `
      font-weight: 600;
    `}
`;
