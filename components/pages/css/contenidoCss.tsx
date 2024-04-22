import React from 'react';
import styled from 'styled-components';

const PinkContainer = styled.div`
  display: flex;
`;

const Container = styled.div`
  width: 300px;
  height: 200px;
  border: 2px solid #ccc;
  padding: 20px;
  margin-left: auto; /* Coloca el contenedor a la derecha */
  overflow-y: auto; /* Habilita el desplazamiento vertical dentro del contenedor */
`;

const NavBar = styled.nav`
  height: 200px; /* Altura del navegador */
  display: flex;
  flex-direction: column; /* Coloca los elementos de la barra de navegación en una columna */
`;

const NavItem = styled.a`
  text-decoration: none;
  color: black;
  padding: 5px 10px;
  &:hover {
    background-color: #ccc; /* Cambia el color de fondo al pasar el cursor */
  }
`;

function CssPage() {
  const temas = [];
  for (let i = 1; i <= 7; i++) {
    temas.push(<NavItem key={i} href={`#tema${i}`}>Tema {i}</NavItem>);
  }

  return (
    <PinkContainer>
      <NavBar>
        {temas}
      </NavBar>
      <Container>
        <div className="container">
          {/* Aquí puedes escribir lo que quieras dentro del contenedor */}
          <p>pedro pedro pedro peeeeeeeee</p>
        </div>
      </Container>
    </PinkContainer>
  );
}

export default CssPage;


