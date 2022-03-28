import styled from "styled-components";

const Container1 = styled.div`
  display:flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

function Etapa1() { 
  return (
    <Container1>
      <h2>Etapa 1 - Dados Gerais</h2>
      <p>1 - Qual o seu nome?</p>
      <input></input>
      <p>2 - Qual sua idade?</p>
      <input></input>
      <p>3 - Qual seu email?</p>
      <input></input>
      <p>4 - Qual a sua escolaridade?</p>
      <select>
          <option>Ensino Médio Incompleto</option>
          <option>Ensino Médio Completo</option>
          <option>Ensino Superior Incompleto</option>
          <option>Ensino Superior Completo</option>
      </select>
    </Container1>
  );
}

export default Etapa1;