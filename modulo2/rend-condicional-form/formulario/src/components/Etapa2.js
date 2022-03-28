import styled from "styled-components";

const Container2 = styled.div`
  display:flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

function Etapa2() {
  return (
    <Container2>
      <h2>Etapa 2 - Informações do Esnsino Superior</h2>
      <p>5 - Qual curso?</p>
      <input></input>
      <p>6 - Qual unidade de ensino?</p>
      <input></input>
    </Container2>
  );
}

export default Etapa2;