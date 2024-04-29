import BarraNavegacion from "@/components/layout/header/barraNavegacion";
import TituloPagina from "@/components/layout/header/tituloPagina";
import MainContainerCss from "@/components/pages/css/main/mainContainerCss";
import SelectorCss from "@/components/pages/css/main/selectoCss";
import styled from "styled-components";

const MainStyles = styled.main`
  display: flex;
`;

const StyledBarraNavegacion = styled(BarraNavegacion)`
  /* Aquí puedes agregar estilos adicionales específicos para la barra de navegación si es necesario */
`;

export default function CssPage() {
  return (
    <>
      <header>
        <TituloPagina titulo="CSS" />
        <StyledBarraNavegacion page="" /> 
      </header>
      <MainStyles>
        <MainContainerCss />
      </MainStyles>
      {/* <footer><CopiRait/></footer> */}
    </>
  );
} 
