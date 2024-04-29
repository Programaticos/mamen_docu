import styled from "styled-components";

const NavBar = styled.nav`
  display: flex;
  justify-content: space-around;
  background: pink;
  border: 8px solid #e59898;
  border-radius: 20px;
  margin-top: 20px;
  margin-left: 50px;
  margin-right: 50px;
  height: 80px;
`;

const LinkA = styled.a`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TextSpan = styled.span<{ selected: boolean }>`
  border: 3px solid #d16969;
  height: 65px;
  width: 85px;
  text-align: center;
  line-height: 70px;
  border-radius: 8px;
  color: ${(props) => (props.selected ? "black" : "#059862")};
  font-size: ${(props) => (props.selected ? "25px" : "inherit")};
  transition: all 0.5s;
  &:hover {
    background-color: #f7f791;
    color: white;
    font-size: 25px;
  }
`;

const IconImg = styled.img`
  height: 36px;
  border-radius: 50%;
  margin-top: 5px; /* Añadido margen superior para separar la imagen del texto */
`;

export default function BarraNavegacion(props: any) {
  return (
    <NavBar>
      <LinkA href="/html">
        <TextSpan selected={props.page === "html"}>HTML</TextSpan>
        <IconImg src="/html.png" alt="html" />
      </LinkA>
      <LinkA href="/css">
        <TextSpan selected={props.page === "css"}>CSS</TextSpan>
        <IconImg src="/cso.png" alt="css" />
      </LinkA>
      <LinkA href="/js">
        <TextSpan selected={props.page === "js"}>JS</TextSpan>
        <IconImg src="/js.png" alt="js" />
      </LinkA>
      <LinkA href="/ts">
        <TextSpan selected={props.page === "ts"}>TS</TextSpan>
        <IconImg src="/ts.png" alt="ts" />
      </LinkA>
      <LinkA href="/react">
        <TextSpan selected={props.page === "react"}>REACT</TextSpan>
        <IconImg src="/react.png" alt="react" />
      </LinkA>
      <LinkA href="/angular">
        <TextSpan selected={props.page === "angular"}>Angular</TextSpan>
        <IconImg src="/angular.png" alt="angular" />
      </LinkA>
    </NavBar>
  );
}