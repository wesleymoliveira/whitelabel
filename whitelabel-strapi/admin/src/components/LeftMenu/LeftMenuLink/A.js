import styled from "styled-components";

const A = styled.a`
  position: relative;
  padding-top: 0.7rem;
  padding-bottom: 0.2rem;
  padding-left: 1.6rem;
  min-height: 3.6rem;
  border-left: 0.3rem solid transparent;
  cursor: pointer;
  color: ${(props) => props.theme.main.colors.leftMenu["link-color"]};
  text-decoration: none;
  display: block;
  -webkit-font-smoothing: antialiased;
  &:hover {
    color: ${(props) => props.theme.main.colors.sortium.green};
    background: ${(props) => props.theme.main.colors.strapi["blue-darker"]};
    border-left: 0.3rem solid
      ${(props) => props.theme.main.colors.sortium.green};
    text-decoration: none;
  }
  &:focus {
    color: ${(props) => props.theme.main.colors.sortium.green};
    text-decoration: none;
  }
  &:visited {
    color: ${(props) => props.theme.main.colors.leftMenu["link-color"]};
  }
  &.linkActive {
    color: white !important;
    border-left: 0.3rem solid
      ${(props) => props.theme.main.colors.sortium.green};
  }
`;

export default A;
